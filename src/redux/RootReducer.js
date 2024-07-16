import {
    ADD_TO_CART,
    SET_QUANTITY,
    FILTER_PRODUCTS,
    LOAD_PRODUCTS,
    PRICE_FILTER, REMOVE_FROM_CART, SHOW_MINI_CART, HIDE_MINI_CART,
    SEARCH_PRODUCTS,
    SORT
} from "./ActionType";

const loadCart = () => {
    return JSON.parse(localStorage.getItem('cart')) ?? [];
}
const initialState = {

    products: [],
    initSortProducts: [],
    filter: "ALL",
    search: "",
    sort: "default",
    startPrice: 0,
    endPrice: null,
    showMiniCart: false,
    cartItems:[],
    cart: loadCart(),

}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            console.log("payload")
            let cart = loadCart();
            let products = action.payload.data;
            let out = [];
            loop: for (const p of products) {
                for (const c of cart) {
                    if (p.id === c.id) {
                        out.push({...p, isBuying: true});
                        continue loop;
                    }
                }
                out.push({...p, isBuying: false});
            }
            return {
                ...state,
                products: out,
                initSortProducts: products
            };
        case SEARCH_PRODUCTS:
            return {
                ...state,
                filter: 'ALL',
                search: action.payload.keyword
            };
        case FILTER_PRODUCTS:
            return {
                ...state,
                filter: action.payload.filter
            }
        case SORT:
            if(action.payload.typeSort=='default'){
                return {
                    ...state,
                    sort: action.payload.typeSort,
                    products: state.initSortProducts
                };
            }else{
                const sortedProducts = [...state.products].sort((a, b) => {
                    if (action.payload.typeSort === 'price_asc') {
                        return a.price - b.price;
                    } else if (action.payload.typeSort === 'price_desc') {
                        return b.price - a.price;
                    } else if (action.payload.typeSort === 'newest') {
                        return new Date(b.dateAdded) - new Date(a.dateAdded);
                    } else if (action.payload.typeSort === 'bestselling') {
                        return b.amountSold - a.amountSold;
                    }
                    return 0;
                });
                return {
                    ...state,
                    sort: action.payload.typeSort,
                    products: sortedProducts
                };
            }
        case PRICE_FILTER:
            return {
                ...state,
                startPrice: action.payload.startPrice || state.startPrice,
                endPrice: action.payload.endPrice || state.endPrice
            };

        //      chỉnh sửa từ đây
        case SHOW_MINI_CART:
            return  {
                ...state,
                showMiniCart: true,
            }

        case HIDE_MINI_CART:
            return  {
                ...state,
                showMiniCart: false,
            }


         case ADD_TO_CART:
            // Kiem tra xem co +quantity, ko thi new cartItem.
            /*
            * Kiem tra mang cartItems, mảng bắt đầu từ 0
             */
            const  newItem = action.payload;
            const existingItemIndex = state.cartItems.findIndex(x => x.id === newItem.id);
            if(existingItemIndex >=0 ){
                const updatedCartItems = state.cartItems.map((item,index)=>

                index === existingItemIndex ? {...item, quantity: item.quantity + newItem.quantity} : item );
                return {
                    ...state,
                    showMiniCart: true,
                    cartItems: updatedCartItems,
                };

            } else {
                return {
                    ...state,
                    showMiniCart: true,
                    cartItems: [...state.cartItems, newItem],
                }

            }

        case REMOVE_FROM_CART:
            /*
            * Lấy ra cái id product muốn xoá.
            * cartItems lọc lại và bỏ đi cái id muốn xoá đó => xong.
             */
            const idNeedToRemove = action.payload;
            const filteredCartItems = state.cartItems.filter(x => x.id !== idNeedToRemove);
            return {
                ...state,
                cartItems: filteredCartItems,
            }

        case SET_QUANTITY:
            /**
             *  Dùng trong + -  của giỏ hàng.
             *  set trực tiếp value quantity cho cartItems.
             */

            const {id, quantity} = action.payload;
            const updateCartItems = state.cartItems.map(item =>
                item.id === id ? {...item, quantity} : item

            );


            return {
                ...state,
                cartItems: updateCartItems,
            }




        default:
            return state;
    }
}


export default rootReducer;