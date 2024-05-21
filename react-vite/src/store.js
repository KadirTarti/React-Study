import {configureStore} from '@reduxjs/toolkit'
import authReducer from "@/features/authSlice.js";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
        user: {}
    }
})

export const persistor = persistStore(store);

export default store;
