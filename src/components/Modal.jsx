import React from 'react'

import { BrowserRouter as
    Route,
    NavLink
} from 'react-router-dom'

import { navigationLinks, socialTabs } from '../assets/js/sidebarsTabs'

const modalClass = 'text-gray-100 font-semibold text-lg hover:text-gray-500 animated fadeInDown'


const Modal = ( props ) => 
    <div
        id        = "modal"
        className = "flex top-0 w-full h-full animated fadeIn delay-1"
        onClick   = { () => props.closeModal() }
    >
        <div className="text-center w-1/2 mx-auto mt-48">
            <ul>
                { navigationLinks.map(( element, index ) => 
                    <li
                        key       = { index }
                        className = "text-center my-3"
                    >
                        { index === 4
                            ?
                                <a
                                    href      = "https://tom-deman.github.io/portfolio/"
                                    target    = "_blank"
                                    rel       = "noopener noreferrer"
                                    className = { `${ modalClass } delay-${ index } slow` }
                                >
                                    { element }
                                </a>
                            :
                                <NavLink
                                    exact
                                    activeClassName = "text-gray-500"
                                    className       = { `${ modalClass } delay-${ index } slow` }
                                    to              = { index === 0 ? '/e-shop/' : `/e-shop/${ element.toLowerCase() }` }
                                >
                                    { element }
                                </NavLink>
                        }
                    </li>
                )}
            </ul>

            <ul className="flex h-6 justify-around m-auto w-48 mt-12">
                { socialTabs.map(( element, index ) => 
                    <li key={ index }>
                        <a
                            href   = { element.href }
                            target = "_blank"
                            rel    = "noopener noreferrer"
                        >
                            <i className={ `${ element.icon } text-white m-2 text-sm animated delay-6 fadeInUp` } />
                        </a>
                    </li>
                )}
            </ul>
        </div>
    </div>


export default Modal
