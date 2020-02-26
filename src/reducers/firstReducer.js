let initialState = {
    cart: [{}],
    price: 0
}

export default function reducer(state = initialState, { type, payload }) {
    switch( type ) {
        case 'ADD_ITEM':
            return state = {
                cart: [
                    ...state.cart,
                    {
                        name          : payload.name,
                        price         : payload.price,
                        imgProduct    : payload.imgProduct,
                        miniImgProduct: payload.miniImgProduct,
                        quantity      : payload.quantity,
                        total         : payload.total
                    }
                ],
                price: state.price + payload.total
            }
        default:
            return state
    }
}
