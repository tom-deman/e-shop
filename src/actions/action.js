export const addProduct = ( a, b ) => {
    return {
        type   : 'ADD_PRODUCT',
        payload: {
            product: a,
            price: b
        }
    }
}
