import { createSlice } from "@reduxjs/toolkit";

//slice
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            //state --> initalState
            //action --> type,payload
            //type == name/actionobject name
            //type = cart/addToCart
            
            console.log(state)
            console.log(action)
            //business logic:
            state.cart.push(action.payload)

        }
    }
})
export const {addToCart} = cartSlice.actions
export default cartSlice.reducer
