import React, {
    StrictMode
} from 'react'


import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'


const Sidebar = () => {

    const navigationLinks = [
        {
            name: 'Home',
        },
        {
            name: 'Shop'
        },
        {
            name: 'Contact'
        },
        {
            name: 'Portfolio'
        }
    ]

    const socialTabs = [
        {
            href: 'https://www.facebook.com',
            icon: 'fab fa-facebook-f'
        },
        {
            href: 'https://twitter.com',
            icon: 'fab fa-twitter'
        },
        {
            href: 'https://www.pinterest.com',
            icon: 'fab fa-pinterest'
        },
        {
            href: 'https://linkedin.com/',
            icon: 'fab fa-linkedin'
        },
        {
            href: 'https://instagram.com',
            icon: 'fab fa-instagram'
        },
    ]


    return (
        <StrictMode>
            <div
                className="w-1/5 h-screen"
                id="sidebar"
            >
                <div className="select-none w-12 h-12 rounded-full m-auto px-2 pb-2 pt-1 mt-10 border-2 border-gray-300 text-center">
                    <h1 className="text-2xl font-medium text-gray-300">T</h1>
                </div>

                <div>
                    <ul className="mt-56 mb-64">
                        { navigationLinks.map(( element, index ) => {
                            return(
                                <li
                                    key={ index }
                                    className="text-center"
                                >
                                    <Link
                                        className="text-white hover:text-gray-500 text-sm m-1"
                                        to={ `/${element.name}` }
                                    >
                                        { element.name }
                                    </Link>
                                </li>
                            )
                        }) }
                    </ul>
                </div>

                <div className="pt-8">
                    <ul className="flex m-auto w-40">
                        { socialTabs.map(( element, index ) => {
                            return(
                                <li
                                    key={ index }
                                    className=""
                                >
                                    <a
                                        href={ element.href }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={ `${ element.icon } text-white m-2 text-sm` } />
                                    </a>
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        </StrictMode>
    )
}


export default Sidebar
