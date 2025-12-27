import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice" //default export..

export const store = configureStore({
    //reducers
    reducer:{
        cart:cartReducer
    }
})