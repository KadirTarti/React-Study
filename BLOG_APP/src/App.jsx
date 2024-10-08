import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import ErrorBoundary from "./components/Error/ErrorBoundary";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#454F5B',
      },
      secondary: {
        main: '#454F5B',
        second: '#161C24'
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <ErrorBoundary>
          <AppRouter />
          </ErrorBoundary>
        {/* </PersistGate> */}
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
