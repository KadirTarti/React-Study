import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./app/store";
import AppRouter from "./router/AppRouter";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#0F3460",
        second: "#AE445A",
      },
      secondary: {
        main: "#533483",
        second: "#E94560",
        third: "#F39F5A"
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;