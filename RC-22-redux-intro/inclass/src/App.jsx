import "./App.css";
import Counter from "./components/counter/Counter";
import ErrorBoundary from "./components/ErrorBoundary";
import Todo from "./components/todo/Todo";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Provider>
        <ErrorBoundary>
          <Counter />
          {/* <Todo /> */}
        </ErrorBoundary>
      </Provider>
    </div>
  );
}

export default App;
