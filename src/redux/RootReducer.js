import {ADD_CART, FILTER_PRODUCTS, LOAD_PRODUCTS, PRICE_FILTER, SEARCH_PRODUCTS, SORT} from "./ActionType";

const loadCart = () => {
    return JSON.parse(localStorage.getItem('cart')) ?? [];
}
const initialState = {
    products: [],
    filter: "ALL",
    search: "",
    sort: "",
    startPrice: 0,
    endPrice: null,
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
                products: out
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
            return {
                ...state,
                sort: action.payload.typeSort
            };
        case PRICE_FILTER:
            alert('PRICE_FILTER action received:', action.payload);
            return {
                ...state,
                startPrice: action.payload.startPrice || state.startPrice,
                endPrice: action.payload.endPrice || state.endPrice
            };
        case ADD_CART:
            return {
                ...state,
                status: action.payload.cart


            }

        default:
            return state;
    }
}


export default rootReducer;