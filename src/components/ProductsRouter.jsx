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
            text: '1'
        },
        {
            path: '/product-2',
            text: '2'
        },
        {
            path: '/product-3',
            text: '3'
        },
        {
            path: '/product-4',
            text: '4'
        },
        {
            path: '/product-5',
            text: '5'
        },
        {
            path: '/product-6',
            text: '6'
        },
        {
            path: '/product-7',
            text: '7'
        },
        {
            path: '/product-8',
            text: '8'
        },
        {
            path: '/product-9',
            text: '9'
        },
        {
            path: '/product-10',
            text: '10'
        }
    ]


    return(
        <div>
            { productsTab.map(( element, index ) => 
                <Route path={ element.path }>
                    <Product

                    />
                </Route>
            )}
        </div>
    )
}


export default ProductsRouter
