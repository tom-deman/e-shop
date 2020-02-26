import React from 'react'

import { BrowserRouter as
    Router,
    Route
} from 'react-router-dom'

import Product from './Product'


const ProductsRouter = () => {

    const productsTab = [
        {
            path: '/product-1',
            imgProduct: 'img-product-1',
            price: 60,
            name: 'Kettle',
            miniImgProduct: 'product-cart-1'
        },
        {
            path: '/product-2',
            imgProduct: 'img-product-2',
            price: 120,
            name: 'Shoes',
            miniImgProduct: 'product-cart-2'
        },
        {
            path: '/product-3',
            imgProduct: 'img-product-3',
            price: 150,
            name: 'Headphones',
            miniImgProduct: 'product-cart-3'
        },
        {
            path: '/product-4',
            imgProduct: 'img-product-4',
            price: 40,
            name: 'Cup',
            miniImgProduct: 'product-cart-4'
        },
        {
            path: '/product-5',
            imgProduct: 'img-product-5',
            price: 200,
            name: 'Gold Watch',
            miniImgProduct: 'product-cart-5'
        },
        {
            path: '/product-6',
            imgProduct: 'img-product-6',
            price: 40,
            name: 'Speaker',
            miniImgProduct: 'product-cart-6'
        },
        {
            path: '/product-7',
            imgProduct: 'img-product-7',
            price: 80,
            name: 'White Watch',
            miniImgProduct: 'product-cart-7'
        },
        {
            path: '/product-8',
            imgProduct: 'img-product-8',
            price: 500,
            name: 'Phone',
            miniImgProduct: 'product-cart-8'
        },
        {
            path: '/product-9',
            imgProduct: 'img-product-9',
            price: 500,
            name: 'Camera',
            miniImgProduct: 'product-cart-9'
        },
        {
            path: '/product-10',
            imgProduct: 'img-product-10',
            price: 100,
            name: 'Chair',
            miniImgProduct: 'product-cart-10'
        },
        {
            path: '/product-11',
            imgProduct: 'img-product-11',
            price: 100,
            name: 'BW Hphones',
            miniImgProduct: 'product-cart-11'
        }
    ]


    return(
        <div>
            { productsTab.map(( element, index ) => 
                <Route path={ element.path }>
                    <Product
                        miniImgProduct={ element.miniImgProduct }
                        imgProduct={ element.imgProduct }
                        price={ element.price }
                        name={ element.name }
                    />
                </Route>
            )}
        </div>
    )
}


export default ProductsRouter
