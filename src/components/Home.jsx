import React from 'react'

import Grid       from './Grid'
import Newsletter from './Newsletter'
import Footer     from './Footer'


const Home = () => {
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

            <Grid />

            <Newsletter />

            <Footer />
        </div>
    )
}

export default Home
