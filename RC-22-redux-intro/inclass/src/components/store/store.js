import {createStore} from "redux";
import {legacy_creatStore as createStore} from "redux";
import { counterReducer } from "../redux/reducers/counterReducer";

export const store = createStore(counterReducer)