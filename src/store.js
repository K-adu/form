/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./stores/reducers/Root";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Configs from "./Configs";

import { composeWithDevTools } from "redux-devtools-extension";

export default (preloadedState) => {
  // const store = createStore(() => [], {}, applyMiddleware());
  const persistConfig = {
    key: Configs.REDUX_PERSIST_KEY,
    storage,
    blacklist: ["authorize"],
  };
  let store = createStore(
    persistReducer(persistConfig, reducer),
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
