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
            name: 'Kettle'
        },
        {
            path: '/product-2',
            imgProduct: 'img-product-2',
            price: 120,
            name: 'Shoes'
        },
        {
            path: '/product-3',
            imgProduct: 'img-product-3',
            price: 150,
            name: 'Headphones'
        },
        {
            path: '/product-4',
            imgProduct: 'img-product-4',
            price: 40,
            name: 'Cup'
        },
        {
            path: '/product-5',
            imgProduct: 'img-product-5',
            price: 200,
            name: 'Gold Watch'
        },
        {
            path: '/product-6',
            imgProduct: 'img-product-6',
            price: 40,
            name: 'Speaker'
        },
        {
            path: '/product-7',
            imgProduct: 'img-product-7',
            price: 80,
            name: 'White Watch'
        },
        {
            path: '/product-8',
            imgProduct: 'img-product-8',
            price: 500,
            name: 'Phone'
        },
        {
            path: '/product-9',
            imgProduct: 'img-product-9',
            price: 500,
            name: 'Camera'
        },
        {
            path: '/product-10',
            imgProduct: 'img-product-10',
            price: 100,
            name: 'Chair'
        },
        {
            path: '/product-11',
            imgProduct: 'img-product-11',
            price: 100,
            name: 'BW Hphones'
        }
    ]


    return(
        <div>
            { productsTab.map(( element, index ) => 
                <Route path={ element.path }>
                    <Product
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
