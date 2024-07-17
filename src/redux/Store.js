import rootReducer from "./RootReducer";
import { configureStore } from '@reduxjs/toolkit';




const store = configureStore({
    reducer: rootReducer, // Truyền rootReducer vào đây

});

console.log("Store thay đổi: " + store.getState())

export default store;
