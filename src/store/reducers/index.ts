import { combineReducers } from "redux";
import { authorizationReducer } from "./authorizationReducer";
import list from "./listSlice";

export const rootReducer = combineReducers({
  authorization: authorizationReducer,
  list,
});

export type RootState = ReturnType<typeof rootReducer>;
