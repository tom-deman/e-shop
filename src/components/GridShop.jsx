import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'

import { productsTabShop } from '../assets/js/productsTabs'


const GridShop = () => {
    return(
        <div>
            { productsTabShop.map(( element, index ) => 
                <div className="flex">
                    <Link
                        className="w-1/2"
                        to={ element.left }
                    >
                        <div className={ `${ element.left } animated fadeIn ${ element.leftAnimate }` } />
                    </Link>

                    <Link
                        className="w-1/2"
                        to={ element.right }
                    >
                        <div className={ `${ element.right } animated fadeIn ${ element.rightAnimate }` } />
                    </Link>
                </div>
            )}
        </div>
    )
}


export default GridShop
