import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import productReducer from '../features/productSlice'

export const store = configureStore({
    reducer: {
        //bunda pure redux gibi combiner kullanmaya gerek yok
        auth: authReducer,
        products: productReducer,
    },
})

