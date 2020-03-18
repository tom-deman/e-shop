import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'

import { productsTabShop }     from '../assets/js/productsTabs'
import { imgClass, animation } from '../assets/js/variables'


const GridShop = () => 
    <>
        { productsTabShop.map(( element, index ) => 
            <div
                className="flex flex-wrap"
                key={ index }
            >
                <Link
                    className = "md:w-1/2 w-full"
                    to        = { element.leftPath }
                >
                    <div className={ `${ element.left } ${ imgClass } ${ animation } ${ element.leftAnimate }` } />
                </Link>

                <Link
                    className = "md:w-1/2 w-full"
                    to        = { element.rightPath }
                >
                    <div className={ `${ element.right } ${ imgClass } ${ animation } ${ element.rightAnimate }` } />
                </Link>
            </div>
        )}
    </>


export default GridShop
