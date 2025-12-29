import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice" //default export..
import contentReducer from "./redux/ContentSlice"

export const store = configureStore({
    //reducers
    reducer:{
        cart:cartReducer, //data...
        content:contentReducer
    }
})

