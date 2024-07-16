const {createSlice} = require('@reduxjs/toolkit')

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: [
            {
                // id: 1, //productId
                // product: {},
                // quantity: 1
            }
        ],
    },
    reducers: {
        showMiniCart(state) {
            state.showMiniCart = true;

        },
        hideMiniCart(state) {
            state.showMiniCart = false;
        },

        // them vao gio hàng
        // newItem = {id, product, quantity}
        addToCart(state, action) {
            const newItem = action.payload;
            // check neu item da co
            const index = state.cartItems.findIndex(x => x.id === newItem.id)
            if(index >= 0) {
                //increase quantity
                state.cartItems[index].quantity += newItem.quantity;
            }else {
                state.cartItems.push(newItem);
            }


        },
        setQuantity(state, action) {
            const {id, quantity} =action.payload;
            //check id ko co trong cart.
            const index = state.cartItems.findIndex(x => x.id === id);
            if(index >= 0) {
                state.cartItems[index].quantity = quantity;
            }


        },
        removeFromCart(state, action) {
            // filter() là mảng mới bỏ vô cartItem. Mảng này chứa id khác với id muốn remove.
            const idNeedToRemove = action.payload;
            state.cartItems = state.cartItems.filter(x => x.id !== idNeedToRemove)


        },

    }
});

const {actions , reducer} = cartSlice;
export const {showMiniCart, hideMiniCart} = actions;
export default reducer;