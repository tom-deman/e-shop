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
                price: state.price + payload.total
            }

        case 'ADD_QUANTITY':
            const addQuantityTab = [ ...state.cart ]
            addQuantityTab[ payload.index ].quantity += payload.quantity
            addQuantityTab[ payload.index ].total    += payload.total

            return state = {
                cart : [ ...addQuantityTab ],
                price: state.price += payload.total
            }

        case 'DELETE_PRODUCT':
            const deleteTab = [ ...state.cart ]
            deleteTab.splice( payload, 1 )

            return state = {
                cart : [ ...deleteTab ],
                price: state.price - state.cart[ payload ].total
            }

        case 'CHANGE_QUANTITY':
            let newPrice
            const changeQuantityTab = [ ...state.cart ]

            state.cart[ payload.index ].quantity < payload.value
                ? newPrice = ( state.price + changeQuantityTab[ payload.index ].price )
                : newPrice = ( state.price - changeQuantityTab[ payload.index ].price )

            changeQuantityTab[ payload.index ].quantity = payload.value
            changeQuantityTab[ payload.index ].total    = ( payload.value * changeQuantityTab[ payload.index ].price )

            return state = {
                cart: [ ...changeQuantityTab ],
                price: newPrice
            }

        default:
            return state
    }
}
