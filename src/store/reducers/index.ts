import { combineReducers } from "redux";
import { authorizationReducer } from "./authorizationReducer";

export const rootReducer = combineReducers({
  authorization: authorizationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
