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
                    <div className={ `${ element.left } ${ imgClass } ${ animation } ${ element.leftAnimate } flex items-end justify-center` }>
                        <p className = "hidden font-medium text-sm tracking-wide pb-4">
                            { element.leftName }
                        </p>
                    </div>
                </Link>

                <Link
                    className = "md:w-1/2 w-full"
                    to        = { element.rightPath }
                >
                    <div className={ `${ element.right } ${ imgClass } ${ animation } ${ element.rightAnimate } flex items-end justify-center` }>
                        <p className="hidden font-medium text-sm tracking-wide pb-4">
                            { element.rightName}
                        </p>
                    </div>
                </Link>
            </div>
        )}
    </>


export default GridShop
