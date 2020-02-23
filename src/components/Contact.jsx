import React from 'react'

import Location from './Location'


const Contact = () => {
    return(
        <div id="contact">
            <div className="flex items-center justify-center contact-header">
                <p className="uppercase text-6xl text-white font-bold text-center">
                    Let's talk
                </p>
            </div>

            <Location />
        </div>
    )
}


export default Contact
