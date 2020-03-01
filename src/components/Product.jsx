import React from 'react'

import Details       from './Details'
import Description   from './Description'
import FooterProduct from './FooterProduct'


const Product = ( props ) => 
    <div id="product">
        {/* We are on the single products page, details render the big first part of this page with products details */}
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
