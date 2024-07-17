import {createSelector} from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cartItems;

///count number of product in cart.
export const cartItemsCountSelector = createSelector(cartItemsSelector,
    (cartItems) => cartItems.reduce((count,item) => count+ item.quantity, 0)
);

// calculate total price cart
export const cartTotalSelector = createSelector(
    cartItemsSelector,
    (cartItems) => cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0));

