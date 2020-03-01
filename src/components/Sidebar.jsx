import React from 'react'

import { BrowserRouter as
    Route,
    NavLink
} from 'react-router-dom'

import { navigationLinks, socialTabs } from '../assets/js/sidebarsTabs.js'


const Sidebar = () =>
    <div
        className="w-1/5 hidden md:block h-screen"
        id="sidebar"
    >
        <div className="select-none w-12 h-12 rounded-full m-auto px-2 pb-2 pt-1 mt-10 border-2 border-gray-300 text-center">
            <h1 className="text-2xl font-medium text-gray-300">
                T
            </h1>
        </div>

        <div>
            <ul className="mt-56 mb-64">
                {/* Sidebars links to the different route in the site, done by maping navigationLinks (located in sidebarsTabs.js) */}
                { navigationLinks.map(( element, index ) => 
                    <li
                        key={ index }
                        className="text-center"
                    >
                        {/* The fourth index is my personnal portfolio links, it's not a Route */}
                        { index === 4
                            ?
                                <a
                                    href="https://tom-deman.github.io/portfolio/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-gray-500 text-sm m-1"
                                >
                                    { element }
                                </a>
                            :
                                <NavLink
                                    exact
                                    activeClassName="text-gray-500"
                                    className="text-white hover:text-gray-500 text-sm m-1"
                                    to={ index === 0 ? '/e-shop/' : `/e-shop/${ element.toLowerCase() }` }
                                >
                                    { element }
                                </NavLink>
                        }
                    </li>
                )}
            </ul>
        </div>

        <div className="pt-8">
            <ul className="flex m-auto w-40">
                {/* Font awesome icons with social links */}
                { socialTabs.map(( element, index ) => 
                    <li key={ index }>
                        <a
                            href={ element.href }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={ `${ element.icon } text-white m-2 text-sm` } />
                        </a>
                    </li>
                )}
            </ul>
        </div>
    </div>


export default Sidebar
