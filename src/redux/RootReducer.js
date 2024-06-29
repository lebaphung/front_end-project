import {FILTER_PRODUCTS, LOAD_PRODUCTS, SEARCH_PRODUCTS} from "./ActionType";

const loadCart = () => {
    return JSON.parse(localStorage.getItem('cart')) ?? [];
}
const initialState = {
    products: [],
    filter: "ALL",
    search: "",
    cart: loadCart()
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
                search: action.payload.keyword
            };
        case FILTER_PRODUCTS:
            return {
                ...state,
                filter: action.payload.filter
            }

        default:
            return state;
    }
}
export default rootReducer;