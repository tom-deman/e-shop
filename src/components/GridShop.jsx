import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'


const GridShop = () => {
    return(
        <div>
            <div className="flex">
                <div className="w-1/2 shop-1">
                    <Link to="/product">
                        Link
                    </Link>
                </div>
                <div className="w-1/2 shop-2"></div>
            </div>
            <div className="flex">
                <div className="w-1/2 shop-3"></div>
                <div className="w-1/2 shop-4"></div>
            </div>
            <div className="flex">
                <div className="w-1/2 shop-5"></div>
                <div className="w-1/2 shop-6"></div>
            </div>
            <div className="flex">
                <div className="w-1/2 shop-7"></div>
                <div className="w-1/2 shop-8"></div>
            </div>
            <div className="flex">
                <div className="w-1/2 shop-9"></div>
                <div className="w-1/2 shop-10"></div>
            </div>
        </div>
    )
}


export default GridShop
