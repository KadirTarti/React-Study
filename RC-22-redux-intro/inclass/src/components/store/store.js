import {createStore} from "redux";
import {legacy_creatStore as createStore} from "redux";
import { counterReducer } from "../redux/reducers/counterReducer";
import { todoReducer } from "./todoReducer";

// export const store = createStore(counterReducer)

//tek parametre alıyor... counterReducer
//! ancak birden fazla store elemanına ihtiyacınız varsa birden fazla reducer'ı combine eden bir metod var: combineReducers ->

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})

export const store = createStore(rootReducer) //bunu ekledikten sonra üstteki const store kısmını iptal etmemiz gerekli!