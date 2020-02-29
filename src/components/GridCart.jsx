import React from 'react'

import { connect } from 'react-redux'

import { cartTabs }         from '../assets/js/cartTabs'
import { imgClass, button } from '../assets/js/variables'

const divClass = 'w-1/5 flex items-center'


const GridCart = ( props ) => 
    <div className="bg-white pt-32">
        <div className="md:flex hidden px-4 py-4 mx-10 border border-gray-400">
            <div className="w-1/5" />
            { cartTabs.map(( element, index ) =>
                <div
                    className="w-1/5"
                    key={ index }
                >
                    <p>
                        { element }
                    </p>
                </div>
            )}
        </div>

        { props.cart.length === 1
            ?
                <div className="flex mx-10 py-4 px-4 md:border-t-0 border-t border-b border-r border-l h-24 justify-center items-center border-gray-400">
                    <p>
                        Your card is empty
                    </p>
                </div>
            :
                props.cart.map(( element, index ) =>
                    index > 0 &&
                        <div
                            className="flex flex-wrap mx-10 py-4 px-4 border-b border-r border-l md:border-t-0 border-t md:h-40 h-auto border-gray-400"
                            key={ index }
                        >
                            <div className={ `md:${ divClass } md:justify-start justify-center w-full md:py-0 pb-6` }>
                                <div className={ `h-24 w-24 md:ml-8 ml-0 md:mt-0 mt-2 ${ element.miniImgProduct } ${ imgClass }` } />
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
                                <p className="md:ml-6 ml-0">
                                    { element.quantity }
                                </p>
                            </div>
                            <div className={ `md:${ divClass } md:justify-start justify-around w-full md:pb-0 pb-6` }>
                                <p className="md:hidden block">
                                    Total:
                                </p>
                                <p>
                                    { `€${ element.total }` }
                                </p>
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


const mapStateToProps = ( state ) => {
    return {
        cart: state.cart.cart,
        price: state.price.price
    }
}

export default connect( mapStateToProps )( GridCart )
