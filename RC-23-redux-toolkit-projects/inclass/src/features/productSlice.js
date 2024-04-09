import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsData:[],
    loading: false,
    error: false,
}

export const getProductsData = createAsyncThunk(
    'getProducts',
    async () => {
        const {data} = await axios('https://dummyjson.com/products')
        return data.products
    }
)


const productSlice = createSlice({
    name:'productsApi',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
       builder.addCase(getProductsData.pending, (state)=>{
        state.loading = true
       }) 
    }
})

export default productSlice.reducer;