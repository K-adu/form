import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";

let store = "";
const renderApp = (preloadedState) => {
  store = configureStore(preloadedState);

  window.state = store.getState;
  const domNode = document.getElementById("root");
  const root = ReactDOM.createRoot(domNode);
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
};

(async () => renderApp({ formValues: null }))();

export { store };
