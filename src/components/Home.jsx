import React, {
    useState,
    useEffect
} from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'

import Grid       from './Grid'
import Newsletter from './Newsletter'
import Footer     from './Footer'

import { animation } from '../assets/js/variables'


const Home = () => {
    const [count, setCount] = useState( false )

    useEffect(() => {
        const home = document.querySelector( '#home' )
        home.addEventListener( 'scroll', () => {
            const isActive = home.scrollTop > 750

            isActive
                ? setCount( true )
                : setCount( false )
        })
    }, [])


    return(
        <div id="home">
            <div
                id="header"
                className="flex items-end"
            >
                <div className="ml-20 mb-12">
                    <Link to='/product-11'>
                        <h2 className="text-5xl font-extrabold text-white select-none">
                            BW Hphones
                        </h2>
                        <p className="text-white text-5xl font-extrabold select-none">
                            €100
                        </p>
                    </Link>
                </div>
            </div>

            <div
                className={ count
                    ? `h-4 w-4 bottom-0 mb-10 mr-12 right-0 fixed z-50 ${ animation }`
                    : 'hidden'
                }
            >
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
