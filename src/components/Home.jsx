import React from 'react'

import Grid       from './Grid'
import Newsletter from './Newsletter'
import Footer     from './Footer'


const Home = () => {
    let count = 1
    return(
        <div id="home">
            <div
                id="header"
                className="flex items-end"
            >
                <div className="ml-20 mb-12">
                    <h2 className="text-5xl font-extrabold text-white select-none">
                        BW Hphones
                    </h2>
                    <p className="text-white text-5xl font-extrabold select-none">
                        €100
                    </p>
                </div>
            </div>

            <div className={ count > 0 ? 'h-4 w-4 bottom-0 mb-10 right-0 mr-10 fixed z-50' : 'hidden' }>
                <a href='#header'>
                    <i class='fas fa-chevron-up text-white absolute hover:text-gray-400 p-3 to-top' />
                </a>
            </div>

            <Grid />

            <Newsletter />

            <Footer />
        </div>
    )
}

export default Home
