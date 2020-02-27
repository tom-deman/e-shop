import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'


const GridShop = () => {

    const productsTab = [
        {
            left: 'product-1',
            leftAnimate: 'delay-1',
            right: 'product-2',
            rightAnimate: 'delay-2'
        },
        {
            left: 'product-3',
            leftAnimate: 'delay-3',
            right: 'product-4',
            rightAnimate: 'delay-4'
        },
        {
            left: 'product-5',
            leftAnimate: 'delay-5',
            right: 'product-6',
            rightAnimate: 'delay-6'
        },
        {
            left: 'product-7',
            leftAnimate: 'delay-7',
            right: 'product-8',
            rightAnimate: 'delay-8'
        },
        {
            left: 'product-9',
            leftAnimate: 'delay-9',
            right: 'product-10',
            rightAnimate: 'delay-10'
        },
    ]


    return(
        <div>
            { productsTab.map(( element, index ) => 
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
