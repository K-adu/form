/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./stores/reducers/Root";

import { composeWithDevTools } from "redux-devtools-extension";

export default (preloadedState) => {
  // const store = createStore(() => [], {}, applyMiddleware());
  let store = createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};
