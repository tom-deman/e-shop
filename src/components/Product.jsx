import React, { useState } from 'react'

import Details       from './Details'
import Description   from './Description'
import FooterProduct from './FooterProduct'


const Product = ( props ) => {

    const [ snackBar, setSnackBar ] = useState( false )
    const [ quantity, setQuantity ] = useState( undefined )


    const showSnackbar = ( quantity ) => {
        setQuantity( quantity )
        setSnackBar( true )
        setTimeout( () => setSnackBar( false ) , 2000 )
    }

    return(
        <div id="product">
            {/* We are on the single products page, details render the big first part of this page with products details */}
            <Details
                miniImgProduct = { props.miniImgProduct }
                imgProduct     = { props.imgProduct }
                price          = { props.price }
                name           = { props.name }
                showSnackbar   = { ( quantity ) => showSnackbar( quantity ) }
            />

            { snackBar &&
                <div className="fixed bottom-0 w-full h-20 bg-teal-500">
                    <p className="text-white text-center w-4/5 mt-6">
                        { quantity + ' "' + props.name + '"' } added to cart !
                    </p>
                </div>
            }

            <Description />

            <FooterProduct />
        </div>
    )
}

export default Product
