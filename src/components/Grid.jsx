import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'


const Grid = () => {

    const imgTabs = [
        {
            class: 'home-1',
            width: 'w-2/4',
            path: 'product-1'
        },
        {
            class: 'home-2',
            width: 'w-1/4',
            path: 'product-2'
        },
        {
            class: 'home-3',
            width: 'w-1/4',
            path: 'product-3'
        },
        {
            class: 'home-4',
            width: 'w-1/4',
            path: 'product-4'
        },
        {
            class: 'home-5',
            width: 'w-1/4',
            path: 'product-5'
        },
        {
            class: 'home-6',
            width: 'w-2/4',
            path: 'product-6'
        },
    ]


    return(
        <div className="flex flex-wrap">
            { imgTabs.map(( element, index ) =>
                <Link
                    key={ index }
                    to={ element.path }
                    className={ element.width }
                >
                    <div className={ `${ element.class } flex items-end justify-center` }>
                        <Link to="/">
                            <p
                                className="hidden font-medium uppercase text-sm tracking-wide pb-4 hover:text-white"
                                onClick={ () => alert( 'hi' ) }
                            >
                                add to cart
                            </p>
                        </Link>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default Grid
