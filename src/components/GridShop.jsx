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
                        <div className={ `${ element.left } flex items-end justify-center` }>
                            <Link to="/shop">
                                <p
                                    className="hidden font-medium uppercase text-sm tracking-wide pb-4 hover:text-gray-600"
                                    onClick={ () => alert( 'hi' ) }
                                >
                                    add to cart
                                </p>
                            </Link>
                        </div>
                    </Link>

                    <Link
                        className="w-1/2"
                        to={ element.right }
                    >
                        <div className={ `${ element.right } flex items-end justify-center` }>
                            <Link to="/shop">
                                <p
                                    className="hidden font-medium uppercase text-sm tracking-wide pb-4 hover:text-gray-600"
                                    onClick={ () => alert( 'hi' ) }
                                >
                                    add to cart
                                </p>
                            </Link>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}


export default GridShop
