import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store";
import { PersistGate } from "redux-persist/integration/react";

let store = "";
const renderApp = (preloadedState) => {
  const storeObj = configureStore(preloadedState);
  store = storeObj.store;
  const persistor = storeObj.persistor;
  window.state = store.getState;
  const domNode = document.getElementById("root");
  const root = ReactDOM.createRoot(domNode);
  root.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  );
};

(async () => renderApp({ formValues: null }))();

export { store };
