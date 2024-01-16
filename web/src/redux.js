// import { configureStore } from "@reduxjs/toolkit";

// export const store = configureStore({
//   reducer: {},
// });
import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

const reduxStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk)); // middleware
  const persistor = persistStore(store);

  return { store, persistor };
};

export default reduxStore;
