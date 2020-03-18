export const addItem = ( a ) => {
    return {
        type   : 'ADD_ITEM',
        payload: a
    }
}

export const addQuantity = ( a ) => {
    return {
        type   : 'ADD_QUANTITY',
        payload: a
    }
}
