import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'


const GridShop = () => {

    const productsTab = [
        {
            left: 'product-1',
            right: 'product-2'
        },
        {
            left: 'product-3',
            right: 'product-4'
        },
        {
            left: 'product-5',
            right: 'product-6'
        },
        {
            left: 'product-7',
            right: 'product-8'
        },
        {
            left: 'product-9',
            right: 'product-10'
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
                        <div className={ element.left } />
                    </Link>

                    <Link
                        className="w-1/2"
                        to={ element.right }
                    >
                        <div className={ element.right } />
                    </Link>
                </div>
            )}
        </div>
    )
}


export default GridShop
