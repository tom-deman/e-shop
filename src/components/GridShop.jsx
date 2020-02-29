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
                className="flex"
                key={ index }
            >
                <Link
                    className="w-1/2"
                    to={ element.left }
                >
                    <div className={ `${ element.left } ${ imgClass } ${ animation } ${ element.leftAnimate }` } />
                </Link>

                <Link
                    className="w-1/2"
                    to={ element.right }
                >
                    <div className={ `${ element.right } ${ imgClass } ${ animation } ${ element.rightAnimate }` } />
                </Link>
            </div>
        )}
    </>


export default GridShop
