import {configureStore} from '@reduxjs/toolkit'
import authReducer from "@/features/authSlice.js";
import {persistReducer, persistStore,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";
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
    },
    middleware : (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
        return defaultMiddleware.concat()
    },
    devTools: process.env.NODE_ENV !== "production",

})

export const persistor = persistStore(store);

export default store;
