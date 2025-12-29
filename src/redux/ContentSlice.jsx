import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchApi = createAsyncThunk(
    "content/fetchContent",
    async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user")
        return res.data.data
    }
)

const contentSlice = createSlice({
    name:"content",
    initialState:{
        data:null,
        error:null,
        isLoading:false
    },
    reducers:{},
    extraReducers:(builder)=>{

        builder.addCase(fetchApi.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.isLoading =false
            state.data = action.payload
        })
        builder.addCase(fetchApi.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        })

    }
})
export default contentSlice.reducer