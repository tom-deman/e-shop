import React from 'react'

import { connect } from 'react-redux'

import { cartTabs }         from '../assets/js/cartTabs'
import { imgClass, button } from '../assets/js/variables'

import { deleteProduct, changeQuantity } from '../actions/action'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'

const divClass = 'w-1/6 flex items-center'

const GridCart = ( props ) => {
    const setNewQuantity = ( event, index ) => {
        const value = event.target.value
        const data = {
            index: index,
            value: Number( value )
        }
        props.changeQuantity( data )
    }


    return(
        <div className="bg-white pt-32">
            <div className="md:flex hidden px-4 py-4 mx-10 border border-gray-400">
                <div className="w-1/6" />
                { cartTabs.map(( element, index ) =>
                    <div
                        className = "w-1/6"
                        key       = { index }
                    >
                        <p>
                            { element }
                        </p>
                    </div>
                )}
            </div>

            {/* Checking if the redux cart is empty or not */}
            { props.cart.length < 1
                ?
                    <div className="flex mx-10 py-4 px-4 md:border-t-0 border-t border-b border-r border-l h-24 justify-center items-center border-gray-400">
                        <p>
                            Your card is empty
                        </p>
                    </div>
                :
                    props.cart.map(( element, index ) =>
                        <div
                            className = "flex flex-wrap mx-10 py-4 px-4 border-b border-r border-l md:border-t-0 border-t md:h-40 h-auto border-gray-400"
                            key       = { index }
                        >
                            <div className={ `md:${ divClass } md:justify-start justify-center w-full md:py-0 pb-6` }>
                                <Link to={ element.imgProduct.slice( 4 ) }>
                                    <div className={ `h-24 w-24 md:ml-8 ml-0 md:mt-0 mt-2 ${ element.miniImgProduct } ${ imgClass }` } />
                                </Link>
                            </div>
                            <div className={ `md:${ divClass } md:justify-start justify-around w-full md:pb-0 pb-6` }>
                                <p className="md:hidden block">
                                    Item:
                                </p>
                                <p>
                                    { element.name }
                                </p>
                            </div>
                            <div className={ `md:${ divClass } md:justify-start justify-around w-full md:pb-0 pb-6` }>
                                <p className="md:hidden block">
                                    Price:
                                </p>
                                <p>
                                    { `€${ element.price }` }
                                </p>
                            </div>
                            <div className={ `md:${ divClass } md:justify-start justify-around w-full md:pb-0 pb-6` }>
                                <p className="md:hidden block">
                                    Quantity:
                                </p>
                                <input
                                    className    ="w-24 h-12 border border-gray-300 shadow-sm text-center rounded-sm"
                                    type         ="number"
                                    min          ="1"
                                    defaultValue = { element.quantity }
                                    onKeyDown    = { ( event ) => event.preventDefault() }
                                    onChange     = { ( event ) => setNewQuantity( event, index ) }
                                />
                            </div>
                            <div className={ `md:${ divClass } md:justify-start justify-around w-full md:pb-0 pb-6` }>
                                <p className="md:hidden block">
                                    Total:
                                </p>
                                <p>
                                    { `€${ element.total }` }
                                </p>
                            </div>
                            <div className={ `md:${ divClass } md:justify-start justify-around w-full md:pb-0 pb-6` }>
                                <button
                                    className ="bg-red-300 hover:bg-red-400 py-1 px-3 text-white text-sm"
                                    onClick   = { () => props.deleteProduct( index ) }
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    )
            }

            <div className="mt-20 mx-10 pb-8">
                <p className="font-medium mb-6">
                    Cart Totals
                </p>
                <div className="flex justify-between border border-gray-400 py-5 px-4">
                    <p className="pl-4 font-medium">
                        Total
                    </p>
                    <p className="pr-4 font-semibold">
                        { `€${ props.price }` }
                    </p>
                </div>
            </div>

            <div className="flex justify-end px-10 pb-12">
                <button className={ `${ button } py-4` }>
                    Proceed to checkout
                </button>
            </div>
        </div>
    )
}


const mapStateToProps = ( state ) => {
    return {
        cart: state.cart.cart,
        price: state.price.price
    }
}

const mapActionToProps = {
    deleteProduct : deleteProduct,
    changeQuantity: changeQuantity
}


export default connect( mapStateToProps, mapActionToProps )( GridCart )
