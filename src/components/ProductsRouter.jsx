import React from 'react'

import { BrowserRouter as
    Router,
    Route
} from 'react-router-dom'

import Product from './Product'
import { productsTab } from '../assets/js/productsTabs'


const ProductsRouter = () => {
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
