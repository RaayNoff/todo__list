import { combineReducers } from "redux";
import { authorizationReducer } from "./authorizationReducer";
import listsReducer from "./listsReducer";

export const rootReducer = combineReducers({
  authorization: authorizationReducer,
  lists: listsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
