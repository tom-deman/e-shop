import React from 'react'

import Details       from './Details'
import Description   from './Description'
import FooterProduct from './FooterProduct'


const Product = ( props ) => {
    return(
        <div id="product">
            <Details
                imgProduct={ props.imgProduct }
                price={ props.price }
                name={ props.name }
            />

            <Description />

            <FooterProduct />
        </div>
    )
}


export default Product
