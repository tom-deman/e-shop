let initialState = {
    cart: {
        product: undefined,
        price: undefined
    }
}

export default function reducer( state = initialState, { type, payload }) {
    switch( type ) {
        case 'ADD_PRODUCT':
            return state = {
                ...state,
                count: state.cart += payload
            }
        default:
            return state
    }
}
