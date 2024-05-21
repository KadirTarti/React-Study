import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "@/router/AppRouter.jsx";
import store, {persistor} from './store'
import {Provider} from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppRouter/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
