import React from 'react'

import Location   from './Location'
import Newsletter from './Newsletter'
import Footer     from './Footer'
import Social     from './Social'


const Contact = () => {
    return(
        <div id="contact">
            <div className="flex items-center justify-center contact-header">
                <p className="uppercase text-6xl text-white font-bold text-center">
                    Let's talk
                </p>
            </div>

            <Location />

            <Social />

            <Newsletter />

            <Footer />
        </div>
    )
}


export default Contact
