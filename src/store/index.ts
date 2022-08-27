import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { listApi } from "../services/listApi";
import { taskApi } from "../services/taskApi";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(listApi.middleware)
      .concat(taskApi.middleware),
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
