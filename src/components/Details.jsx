import React, { useState } from 'react'

import { socialTabs } from '../assets/js/sidebarsTabs.js'

import { connect } from 'react-redux'
import { addItem } from '../actions/action'


const Details = ( props ) => {
    const [ quantity, setQuantity ] = useState( 1 )

    const changeQuantity = ( element ) => {
        setQuantity( Number( element.target.value ))
    }

    const addToCart = () => {
        let product = {
            name: props.name,
            price: props.price,
            imgProduct: props.imgProduct,
            miniImgProduct: props.miniImgProduct,
            quantity: quantity,
            total: quantity * props.price
        }
        console.log( props.cart )
        props.addItem( product )
    }


    return(
        <div className="bg-white w-full p-12 flex">
            <div className="w-1/2 mt-4 p-5">
                <div className={ props.imgProduct }></div>
            </div>

            <div className="w-1/2 mt-4 px-8 py-2">
                <p className="text-4xl font-semibold text-gray-800">{ props.name }</p>
                <p className="text-3xl font-semibold text-gray-800">{ `€${ props.price }` }</p>
                <p className="text-sm text-gray-700 font-light tracking-tight mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ab labore nostrum, quidem dolor sed recusandae eaque reprehenderit, quis veniam maxime dolorum cumque facere tenetur assumenda, harum sit animi iusto beatae accusamus quisquam voluptatem rerum amet totam. Voluptate soluta, doloremque corporis beatae perferendis molestiae error vitae aut distinctio officia quod!
                </p>
                <div className="flex mt-6">
                    <input
                        type="number"
                        className="w-24 h-12 border border-gray-300 shadow-sm text-center rounded-sm"
                        value={ quantity }
                        onChange={ ( event ) => changeQuantity( event ) }
                    />
                    <button
                        className="border border-gray-800 px-6 bg-gray-800 text-white uppercase ml-5 rounded-sm text-sm hover:text-black hover:bg-white"
                        onClick={ () => addToCart() }
                    >
                        Add to cart
                    </button>
                </div>

                <hr className="my-8" />

                <div className="flex my-1">
                    <p className="w-1/5">SKU</p>
                    <p className="w-3/5 font-light text-gray-700 ml-4">026895</p>
                </div>
                <div className="flex">
                    <p className="w-1/5">Categories</p>
                    <p className="w-3/5 font-light text-gray-700 ml-4">Lorem ipsum</p>
                </div>
                <div className="flex my-1">
                    <p className="w-1/5">Tags</p>
                    <p className="w-3/5 font-light text-gray-700 ml-4">Lorem ipsum</p>
                </div>

                <hr className="my-8" />

                <div className="flex">
                    <p className="w-1/5">Share</p>
                    <div className="w-3/5">
                        <ul className="flex">
                            { socialTabs.map(( element, index ) => 
                                <li
                                    key={ index }
                                    className=""
                                >
                                    <a
                                        href={ element.href }
                                        target="_blank"
                                        rel="noopener noreferrer"
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
    addItem: addItem
}


export default connect( mapStateToProps, mapActionToProps )( Details )
