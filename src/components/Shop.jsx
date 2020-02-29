import React from 'react'

import GridShop from './GridShop'

import { imgClass } from '../assets/js/variables'

const Shop = () => 
    <div id="shop">
        <div className={`shop-header flex items-center text-center ${ imgClass }`}>
            <p className="text-white text-4xl font-bold m-auto">
                Shop
            </p>
        </div>

        <GridShop />
    </div>


export default Shop
