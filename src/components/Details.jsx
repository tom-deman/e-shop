import React, { useState } from 'react'

import { socialTabs }  from '../assets/js/sidebarsTabs'
import { detailsTabs } from '../assets/js/productsTabs'

import { BrowserRouter as
    Route,
    useHistory
} from 'react-router-dom'

import { connect }              from 'react-redux'
import { addItem, addQuantity } from '../actions/action'

import { imgClass, button } from '../assets/js/variables'


const Details = ( props ) => {
    const [ addOrViewCart, setAddOrViewCart ] = useState( false )
    const [ quantity, setQuantity ]           = useState( 1 )

    const history = useHistory()


    // Allow only numbers between 1 and 5 in the input and set state to the new quantity
    const changeQuantity = ( element ) => {
        let { min, max, value } = element.target
        value = Math.max(
            Number( min ),
            Math.min( Number( max ),
            Number( value ))
        )
        setQuantity( value )
    }

    // add item to the redux cart with props value for the object
    const addToCart = ( props ) => {
        props.showSnackbar( quantity )
        setAddOrViewCart( true )

        const index = props.cart.findIndex( el => el.name === props.name )

        if ( index !== -1 ) {
            const data = {
                index   : index,
                total   : props.price * quantity,
                quantity: quantity
            }
            props.addQuantity( data )
        }
        else {
            const product = {
                name          : props.name,
                price         : props.price,
                imgProduct    : props.imgProduct,
                miniImgProduct: props.miniImgProduct,
                quantity      : quantity,
                total         : quantity * props.price
            }
            props.addItem( product )
        }

    }

    const goToCart = () => history.push( '/e-shop/cart' )


    // All the props here are initially located in the productsTab.js (productsTab array) file and used by ProductsRouter.jsx file
    return(
        <div className="bg-white w-full p-12 flex flex-wrap relative">
            <div className="md:w-1/2 w-full mt-4 p-5">
                <div className={`${ props.imgProduct } ${ imgClass }`} />
            </div>

            <div className="md:w-1/2 w-full mt-4 px-8 py-2">
                <p className="text-4xl font-semibold text-gray-800">
                    { props.name }
                </p>
                <p className="text-3xl font-semibold text-gray-800">
                    { `€${ props.price }` }
                </p>
                <p className="text-sm text-gray-700 font-light tracking-tight mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab labore nostrum, quidem dolor sed recusandae eaque reprehenderit, quis veniam maxime dolorum cumque facere tenetur assumenda, harum sit animi iusto beatae accusamus quisquam voluptatem rerum amet totam. Voluptate soluta, doloremque corporis beatae perferendis molestiae error vitae aut distinctio officia quod!
                </p>
                <div className="flex mt-6">
                    <input
                        type      = "number"
                        className = "w-24 h-12 border border-gray-300 shadow-sm text-center rounded-sm"
                        min       = "1"
                        max       = "10"
                        value     = { quantity }
                        onChange  = { ( event ) => changeQuantity( event ) }
                        // disable default user key down
                        onKeyDown = { ( event ) => event.preventDefault() }
                    />
                    <button
                        className = { button }
                        onClick   = { () => addToCart( props ) }
                    >
                        Add to cart
                    </button>
                    { addOrViewCart &&
                        <button
                            className = { button }
                            onClick   = { () => goToCart() }
                        >
                            View cart
                        </button>
                    }
                </div>

                <hr className="my-8" />

                {/* DetailsTabs is located in productsTab.js file */}
                { detailsTabs.map(( element, index ) => 
                    <div
                        className = "flex my-1"
                        key       = { index }
                    >
                        <p className="md:w-1/5 w-full">
                            { element.left }
                        </p>
                        <p className="md:w-3/5 w-full font-light text-gray-700 ml-4">
                            { element.right }
                        </p>
                    </div>
                )}

                <hr className="my-8" />

                <div className="flex">
                    <p className="md:w-1/5 w-full">
                        Share
                    </p>
                    <div className="md:w-3/5 w-full">
                        <ul className="flex">
                            {/* See in productsTab.js file */}
                            { socialTabs.map(( element, index ) => 
                                <li
                                    key={ index }
                                    className=""
                                >
                                    <a
                                        href   = { element.href }
                                        target = "_blank"
                                        rel    = "noopener noreferrer"
                                    >
                                        <i className={ `${ element.icon } m-2 text-sm` } />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ( state ) => {
    return {
        cart: state.cart.cart,
    }
}

const mapActionToProps = {
    addItem    : addItem,
    addQuantity: addQuantity
}

export default connect( mapStateToProps, mapActionToProps )( Details )
