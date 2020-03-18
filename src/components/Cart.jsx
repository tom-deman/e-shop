import React from 'react'

import GridCart     from './GridCart'
import { imgClass } from '../assets/js/variables'


const Cart = () => 
    <div id="cart">
        <div
            id        = "cart-header"
            className = {`flex items-center justify-center ${ imgClass }`}
        >
            <div className="text-center">
                <p className="text-white font-medium text-4xl">
                    Cart
                </p>
                <p className="text-white font-light text-lg">
                    Missing only one step to complete your purchase.
                </p>
            </div>
        </div>

        <GridCart />
    </div>


export default Cart
