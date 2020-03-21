import React, { useState } from 'react'

import { BrowserRouter as
    Route,
    useHistory,
    Link
} from 'react-router-dom'

import { connect }              from 'react-redux'
import { addItem, addQuantity } from '../actions/action'

import { productsTabHome }     from '../assets/js/productsTabs'
import { imgClass, animation } from '../assets/js/variables'


const Grid = ( props ) => {
    const [ addOrViewCart, setAddOrViewCart ] = useState([ false, false, false, false, false, false ])

    const history = useHistory()

    const addToCart = ( event, element, position ) => {
        event.preventDefault()

        const positionTabs       = [ ...addOrViewCart ]
        positionTabs[ position ] = true

        setAddOrViewCart([ ...positionTabs ])

        const index = props.cart.findIndex( el => el.name === element.name )

        if ( index !== -1 ) {
            const data = {
                index   : index,
                total   : element.price,
                quantity: 1
            }
            props.addQuantity( data )
        }
        else {
            const product = {
                name          : element.name,
                price         : element.price,
                imgProduct    : element.imgProduct,
                miniImgProduct: element.miniImgProduct,
                quantity      : 1,
                total         : element.price
            }
            props.addItem( product )
        }
    }

    const goToCart = ( event ) => {
        event.preventDefault()
        history.push( '/e-shop/cart' )
    }


    return(
        <div className="flex flex-wrap">
            { productsTabHome.map(( element, index ) =>
                <Link
                    key       = { index }
                    to        = { element.path }
                    className = { `md:${ element.width } w-full` }
                >
                    <div className={ `${ element.class } flex items-end ${ imgClass } justify-center ${ animation } delay-${ index + 1 }` }>
                        { addOrViewCart[ index ] === true
                            ?
                                <p
                                    className = "hidden font-medium uppercase text-xs tracking-wide pb-4 hover:text-gray-600 ml-6"
                                    onClick   = { ( event ) => goToCart( event ) }
                                >
                                    view cart
                                </p>
                            :
                                <>
                                    <p className="hidden font-medium text-xs tracking-wide pb-4">
                                        { element.name + ': €' + element.price }
                                    </p>
                                    <p
                                        className = "hidden font-medium uppercase text-xs tracking-wide pb-4 hover:text-gray-600 ml-6"
                                        onClick   = { ( event ) => addToCart( event, element, index ) }
                                    >
                                        add to cart
                                    </p>
                                </>
                        }
                    </div>
                </Link>
            )}
        </div>
    )
}


const mapStateToProps = ( state ) => {
    return {
        cart : state.cart.cart,
        price: state.price.price
    }
}

const mapActionToProps = {
    addItem    : addItem,
    addQuantity: addQuantity
}


export default connect( mapStateToProps, mapActionToProps )( Grid )
