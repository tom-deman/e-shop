let initialState = {
    cart : [],
    price: 0
}

export default function reducer( state = initialState, { type, payload } ) {
    switch( type ) {
        case 'ADD_ITEM':
            return state = {
                cart: [
                    ...state.cart,
                    { ...payload }
                ],
                price: state.price + payload.price
            }
        case 'ADD_QUANTITY':
            const newTab = state.cart
            newTab[ payload.index ].quantity += 1
            newTab[ payload.index ].total    += payload.price

            return state = {
                cart: [ ...newTab ],
                price: state.price += payload.price
            }
        default:
            return state
    }
}
