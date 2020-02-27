import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'

import { connect } from 'react-redux'
import { addItem } from '../actions/action'


const Grid = ( props ) => {
    const addToCart = ( element ) => {
        let product = {
            name: element.name,
            price: element.price,
            imgProduct: element.imgProduct,
            miniImgProduct: element.miniImgProduct,
            quantity: 1,
            total: element.price
        }
        props.addItem( product )
    }

    const imgTabs = [
        {
            class: 'home-1',
            width: 'w-2/4',
            path: 'product-1',
            imgProduct: 'img-product-1',
            price: 60,
            name: 'Kettle',
            miniImgProduct: 'product-cart-1'
        },
        {
            class: 'home-2',
            width: 'w-1/4',
            path: 'product-2',
            imgProduct: 'img-product-2',
            price: 120,
            name: 'Shoes',
            miniImgProduct: 'product-cart-2'
        },
        {
            class: 'home-3',
            width: 'w-1/4',
            path: 'product-3',
            imgProduct: 'img-product-3',
            price: 150,
            name: 'Headphones',
            miniImgProduct: 'product-cart-3'
        },
        {
            class: 'home-4',
            width: 'w-1/4',
            path: 'product-4',
            imgProduct: 'img-product-4',
            price: 40,
            name: 'Cup',
            miniImgProduct: 'product-cart-4'
        },
        {
            class: 'home-5',
            width: 'w-1/4',
            path: 'product-5',
            imgProduct: 'img-product-5',
            price: 200,
            name: 'Gold Watch',
            miniImgProduct: 'product-cart-5'
        },
        {
            class: 'home-6',
            width: 'w-2/4',
            path: 'product-6',
            imgProduct: 'img-product-6',
            price: 40,
            name: 'Speaker',
            miniImgProduct: 'product-cart-6'
        },
    ]


    return(
        <div className="flex flex-wrap">
            { imgTabs.map(( element, index ) =>
                <Link
                    key={ index }
                    to={ element.path }
                    className={ element.width }
                >
                    <div className={ `${ element.class } flex items-end justify-center` }>
                        <Link to="/">
                            <p
                                className="hidden font-medium uppercase text-sm tracking-wide pb-4 hover:text-gray-600"
                                onClick={ () => addToCart( element ) }
                            >
                                add to cart
                            </p>
                        </Link>
                    </div>
                </Link>
            )}
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


export default connect( mapStateToProps, mapActionToProps )( Grid )
