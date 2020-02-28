import React from 'react'

import { footerTabs } from '../assets/js/footerTabs'


const Footer = () =>
    <div
        id="footer"
        className="p-24 flex"
    >
        <div className="w-1/4">
            <div className="select-none w-12 h-12 rounded-full m-auto px-2 pb-2 pt-1 border-2 border-gray-300 text-center">
                <h1 className="text-2xl font-medium text-gray-300">
                    T
                </h1>
            </div>
        </div>

        <div className="w-1/4 px-8">
            <div className="text-white">
                <p className="mb-8 font-bold text-lg">
                    Headquarter
                </p>
                <p className="font-thin text-sm">
                    1890  Park Street, Oakland, Suite 205, CA 94612
                </p>
            </div>
        </div>

        <div className="w-1/4 px-8">
            <div className="text-white">
                <p className="mb-6 font-bold text-lg">
                    Customer Services
                </p>
                <ul>
                    { footerTabs.map(( element, index ) => 
                        <li key={ index }>
                            <button className="font-thin text-sm m-1 hover:text-gray-400">
                                { element }
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>

        <div className="w-1/4 px-8">
            <div className="text-white">
                <p className="mb-8 font-bold text-lg">
                    Refunds and Returns
                </p>
                <p className="text-white text-sm font-thin m-1">
                    Refunds and Returns Monday – Friday, 9 am to 18 pm
                </p>
                <button className="text-white text-sm font-thin m-1 hover:text-gray-400">
                    test@test.com
                </button>
                <p className="text-white text-sm font-thin m-1">
                    +123 456 789
                </p>
            </div>
        </div>
    </div>


export default Footer
