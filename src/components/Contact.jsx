import React from 'react'

import Location   from './Location'
import Newsletter from './Newsletter'
import Footer     from './Footer'
import Social     from './Social'
import Form       from './Form'

import { imgClass, animation } from '../assets/js/variables'


const Contact = () => 
    <div id="contact">
        <div className={ `flex items-center justify-center ${ imgClass } contact-header` }>
            <p className={ `uppercase md:text-6xl text-4xl text-white font-bold text-center ${ animation } slow` }>
                Let's talk
            </p>
        </div>

        {/* Contains the map and Two City components */}
        <Location />

        <Form />

        {/* Contains the font-awesome icons with social links */}
        <Social />

        <Newsletter />

        <Footer />
    </div>


export default Contact
