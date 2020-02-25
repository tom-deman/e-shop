import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'


const FooterProduct = () => {
    return(
        <div className="bg-gray-100 py-8 w-full text-center border-t border-gray-300">
            <Link
                to="/shop"
                className="uppercase text-sm tracking-wide hover:text-teal-500"
            >
                Back to shop
            </Link>
        </div>
    )
}


export default FooterProduct
