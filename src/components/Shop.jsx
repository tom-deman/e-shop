import React from 'react'

import GridShop from './GridShop'


const Shop = () => {
    return(
        <div id="shop">
            <div className="shop-header flex items-center text-center">
                <p className="text-white text-4xl font-bold m-auto">Shop Metro</p>
            </div>

            <GridShop />
        </div>
    )
}


export default Shop
