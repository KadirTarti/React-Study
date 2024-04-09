import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const initialState = {
    productsData:[],
    loading: false,
    error: false,
}

// Redux toolkit içerisinde Async istekleri yönetmek için standart yöntem createAsyncThunk’ı kullanmaktır. Diğer yöntem workaround vb gibi kavramlarla ifade edilebilen yöntem ile createAsyncThunkın bize sağladığı action typeları manuel yazarak kendi api fonksiyonlarımızı kullanabiliriz.
// Async isteklerinizi bu fonksiyonla kullandığınızda Promise’in dönüş durumuna bağlı olarak (pending, fulfilled, rejected) bir action çağırır.
// createAsyncThunk type, payloadCreator ve options olmak üzere üç parametre alır.
// Örneğin type için “getProducts” parametresini kullandığımızda bu fonksiyon bize
// pending: ‘getProducts/pending’ => Su anda istek gönderiliyor
// fulfilled: ‘getProducts/fulfilled’ => Veri geldi, doldu
// rejected: ‘getProducts/rejected’ => Error durumu.
// action type’larını oluşturur.

export const getProductsData = createAsyncThunk(
    'getProducts', async () => {
        const {data} = await axios('https://dummyjson.com/products');
        console.log(data)
        return data.products
    }
)


const productSlice = createSlice({
    name:'productsApi',
    initialState,
    reducers:{
        clearProductsData : (state) =>{
            state.productsData = []
        }
    },
    
    extraReducers:(builder)=>{
       builder.addCase(getProductsData.pending, (state)=>{
        state.loading = true
        state.error = false
       }).addCase(getProductsData.fulfilled, (state, payLoad)=>{
        state.loading = false
        state.productsData = payLoad
       }).addCase(getProductsData.rejected, (state) =>{
        state.loading = false
        state.error = true;

       })
    }
})

export const {clearProductsData} = productSlice.actions

export default productSlice.reducer;