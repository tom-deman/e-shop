import React from 'react'

import { BrowserRouter as
    Route,
    Link
} from 'react-router-dom'

import { connect } from 'react-redux'
import { addItem } from '../actions/action'

import { productsTabHome }     from '../assets/js/productsTabs'
import { imgClass, animation } from '../assets/js/variables'


const Grid = ( props ) => {
    // Add item to the redux cart with given values by productsTabHome (productsTabs.js)
    const addToCart = ( element ) => {
        let product = {
            name: element.name,
            price: element.price,
            imgProduct: element.imgProduct,
            miniImgProduct: element.miniImgProduct,
            quantity: 1,
            total: element.price
        }
        props.addItem( product )
    }


    return(
        <div className="flex flex-wrap">
            { productsTabHome.map(( element, index ) =>
                <Link
                    key={ index }
                    to={ element.path }
                    className={ `md:${ element.width } w-full` }
                >
                    <div className={ `${ element.class } flex items-end ${ imgClass } justify-center ${ animation } delay-${ index + 1 }` }>
                        <Link to="/">
                            <p
                                className="hidden font-medium uppercase text-xs tracking-wide pb-4 hover:text-gray-600"
                                onClick={ () => addToCart( element ) }
                            >
                                add to cart
                            </p>
                        </Link>
                    </div>
                </Link>
            )}
        </div>
    )
}


const mapStateToProps = ( state ) => {
    return {
        cart: state.cart.cart,
    }
}

const mapActionToProps = {
    addItem: addItem
}


export default connect( mapStateToProps, mapActionToProps )( Grid )
