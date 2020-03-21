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

export const deleteProduct = ( a ) => {
    return {
        type   : 'DELETE_PRODUCT',
        payload: a
    }
}

export const changeQuantity = ( a ) => {
    return {
        type   : 'CHANGE_QUANTITY',
        payload: a
    }
}
