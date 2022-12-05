import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { contentApi } from "../services/contentApi";

import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentApi.middleware),
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
