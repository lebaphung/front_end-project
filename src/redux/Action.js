import {
    ADD_TO_CART,
    SET_QUANTITY,
    FILTER_PRODUCTS,
    LOAD_PRODUCTS, PAYMENT, PRICE_FILTER,
    REMOVE_FROM_CART,SHOW_MINI_CART,HIDE_MINI_CART,
    SEARCH_PRODUCTS, SORT
} from "./ActionType";

export const loadProducts = (data) => (
    {
        type: LOAD_PRODUCTS,
        payload: {data}
    }
)
export const searchProducts = (keyword) => (
    {
        type: SEARCH_PRODUCTS,
        payload: {keyword}
    }
)
export const filterProducts = (filter) => (
    {
        type: FILTER_PRODUCTS,
        payload: {filter}
    }
)


//  XU LY CART

export const showMiniCart = () =>  ({
    type: SHOW_MINI_CART,
});

export const hideMiniCart = () => ({
    type:HIDE_MINI_CART,
});


export const addToCart = (newItem) => (
    {
        type: ADD_TO_CART,
        payload: newItem
    }
)
export const removeFromCart = (idNeedToRemove) => (
    {
        type: REMOVE_FROM_CART,
        payload: idNeedToRemove,
    }
)
export const setQuantity = (id, quantity) => (
    {
        type: SET_QUANTITY,
        payload: {id, quantity},
    }
)


export const payment = (fullName, phoneNumber, email, address, note) => (
    {
        type: PAYMENT,
        payload: {fullName, phoneNumber, email, address, note}
    }
)
export const sort = (typeSort) => (
    {
        type: SORT,
        payload: {typeSort}
    }
)
export const priceFilter = (startPrice, endPrice) => (
    {
        type: PRICE_FILTER,
        payload: {startPrice, endPrice}
    }
)
