import { combineReducers } from "redux";
import list from "./listSlice";
import authorization from "./authorizationSlice";

export const rootReducer = combineReducers({
  authorization,
  list,
});

export type RootState = ReturnType<typeof rootReducer>;
