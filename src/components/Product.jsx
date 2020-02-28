import React from 'react'

import Details       from './Details'
import Description   from './Description'
import FooterProduct from './FooterProduct'


const Product = ( props ) => 
    <div id="product">
        <Details
            miniImgProduct={ props.miniImgProduct }
            imgProduct={ props.imgProduct }
            price={ props.price }
            name={ props.name }
        />

        <Description />

        <FooterProduct />
    </div>


export default Product
