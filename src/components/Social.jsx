import React from 'react'

import { socialTabs } from '../assets/js/sidebarsTabs.js'


const Social = () => 
    <div
        id="social"
        className="py-16 bg-teal-500"
    >
        <ul className="flex m-auto w-1/3 justify-around">
            { socialTabs.map(( element, index ) => 
                <li key={ index }>
                    <a
                        href={ element.href }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className={ `${ element.icon } text-white text-2xl m-2 text-sm` } />
                    </a>
                </li>
            )}
        </ul>
    </div>


export default Social
