import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'

import { connect }                   from 'react-redux'
import { addItem, addQuantity } from '../actions/action'

import { productsTabHome }     from '../assets/js/productsTabs'
import { imgClass, animation } from '../assets/js/variables'


const Grid = ( props ) => {

    const addToCart = ( event, element ) => {
        event.preventDefault()
        const index = props.cart.findIndex( el => el.name === element.name )

        if ( index !== -1 ) {
            const data = {
                index: index,
                price: element.price
            }
            props.addQuantity( data )
        }
        else {
            const product = {
                name          : element.name,
                price         : element.price,
                imgProduct    : element.imgProduct,
                miniImgProduct: element.miniImgProduct,
                quantity      : 1,
                total         : element.price
            }
            props.addItem( product )
        }
    }


    return(
        <div className="flex flex-wrap">
            { productsTabHome.map(( element, index ) =>
                <Link
                    key       = { index }
                    to        = { element.path }
                    className = { `md:${ element.width } w-full` }
                >
                    <div className={ `${ element.class } flex items-end ${ imgClass } justify-center ${ animation } delay-${ index + 1 }` }>
                        <p
                            className = "hidden font-medium uppercase text-xs tracking-wide pb-4 hover:text-gray-600"
                            onClick   = { ( event ) => addToCart( event, element ) }
                        >
                            add to cart
                        </p>
                    </div>
                </Link>
            )}
        </div>
    )
}


const mapStateToProps = ( state ) => {
    return {
        cart : state.cart.cart,
        price: state.price.price
    }
}

const mapActionToProps = {
    addItem    : addItem,
    addQuantity: addQuantity
}


export default connect( mapStateToProps, mapActionToProps )( Grid )
