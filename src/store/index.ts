import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
