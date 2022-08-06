import {data} from "../data";

const INITIAL_STATE = {
    bookLists: data,
    cart: []
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CART_INSERT":
            return {
                ...state,
                cart: state.cart.find(cartItem => cartItem.id === action.payload.id) ?
                    state.cart.map(cartItem => cartItem.id === action.payload.id ? {
                        ...cartItem,
                        count: (cartItem.count + 1)
                    } : cartItem) :
                    [...state.cart, {...action.payload, count: 1}]

            }
        case  "PRODUCT_UP":
            return {
                ...state,
                cart: state.cart.map(cartItem => cartItem.id === action.payload.id ? {
                    ...cartItem,
                    count: cartItem.count + 1
                } : cartItem)
            }
        case  "PRODUCT_DOWN":
            return {
                ...state,
                cart: state.cart.map(cartItem => cartItem.id === action.payload.id ? {
                    ...cartItem,
                    count: (cartItem.count < 0) ? (cartItem.count - 1) : 1
                } : cartItem)
            }
        case  "PRODUCT_REMOVE":
            return {
                ...state,
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state
    }
}