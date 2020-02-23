import React from 'react'


import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'

import { navigationLinks, socialTabs } from '../assets/js/sidebarsTabs.js'

const Sidebar = () => {
    return (
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
                                { index === 3
                                ?
                                    <a
                                        href="https://tom-deman.github.io/portfolio/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-500 text-sm m-1"
                                    >
                                        { element.name }
                                    </a>
                                :
                                    <Link
                                        className="text-white hover:text-gray-500 text-sm m-1"
                                        to={ index === 0 ? '/' : `/${ element.name.toLowerCase() }` }
                                    >
                                        { element.name }
                                    </Link>
                                }
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
    )
}


export default Sidebar
