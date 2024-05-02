import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  persistReducer,
  persistStore,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export let persistor = persistStore(store);

export default store;
