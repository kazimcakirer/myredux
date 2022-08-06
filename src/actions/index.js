const sepeteEkle = book => {
    return {type: "CART_INSERT", payload: book}
}
const productDown = book => {
    return {type: "PRODUCT_DOWN", payload: book}
}
const productRemove = book => {
    return {type: "PRODUCT_REMOVE", payload: book}
}
const productUp = book => {
    return {type: "PRODUCT_UP", payload: book}
}


export {
    sepeteEkle,
    productUp,
    productDown,
    productRemove,
}