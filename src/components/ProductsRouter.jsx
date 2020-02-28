import React from 'react'

import { BrowserRouter as
    Router,
    Route
} from 'react-router-dom'

import Product from './Product'
import { productsTab } from '../assets/js/productsTabs'


const ProductsRouter = () => 
    <>
        { productsTab.map(( element, index ) => 
            <Route
                path={ element.path }
                key={ index }
            >
                <Product
                    miniImgProduct={ element.miniImgProduct }
                    imgProduct={ element.imgProduct }
                    price={ element.price }
                    name={ element.name }
                />
            </Route>
        )}
    </>


export default ProductsRouter
