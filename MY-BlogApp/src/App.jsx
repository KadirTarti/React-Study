import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store, { persistor } from "./app/store";
import AppRouter from "./router/AppRouter";
import { PersistGate } from 'redux-persist/es/integration/react';
import { PersistGate } from 'redux-persist/integration/react'
 

function App() {
  

  return (
    <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
    </>
  );
}

export default App
