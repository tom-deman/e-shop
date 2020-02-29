import React from 'react'

import { footerTabs } from '../assets/js/footerTabs'

const pClass = 'text-white text-sm font-thin m-1'


const Footer = () =>
    <div
        id="footer"
        className="md:p-24 p-12 flex flex-wrap md:text-left text-center"
    >
        <div className="md:w-1/4 w-full md:mb-0 mb-16">
            <div className="select-none w-12 h-12 rounded-full m-auto px-2 pb-2 pt-1 border-2 border-gray-300 text-center">
                <h1 className="text-2xl font-medium text-gray-300">
                    T
                </h1>
            </div>
        </div>

        <div className="md:w-1/4 w-full px-8">
            <div className="text-white">
                <p className="md:mb-8 mb-2 font-bold text-lg">
                    Headquarter
                </p>
                <p className="font-thin text-sm md:mb-0 mb-12">
                    1890  Park Street, Oakland, Suite 205, CA 94612
                </p>
            </div>
        </div>

        <div className="md:w-1/4 w-full px-8">
            <div className="text-white">
                <p className="md:mb-6 mb-2 font-bold text-lg">
                    Customer Services
                </p>
                <ul>
                    { footerTabs.map(( element, index ) => 
                        <li
                            key={ index }
                            className="mobile-add"
                        >
                            <button className="font-thin text-sm m-1 hover:text-gray-400">
                                { element }
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>

        <div className="md:w-1/4 w-full px-8">
            <div className="text-white">
                <p className="md:mb-8 mb-2 md:mt-0 mt-10 font-bold text-lg">
                    Refunds and Returns
                </p>
                <p className={ pClass }>
                    Refunds and Returns Monday – Friday, 9 am to 18 pm
                </p>
                <button className={`${ pClass } hover:text-gray-400`}>
                    test@test.com
                </button>
                <p className={ pClass }>
                    +123 456 789
                </p>
            </div>
        </div>
    </div>


export default Footer
