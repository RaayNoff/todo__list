import { combineReducers } from "redux";
import { authorizationReducer } from "./authorizationReducer";
import listsReducer from "./listsReducer";
import { registrationReducer } from "./registrationReducer";

export const rootReducer = combineReducers({
  authorization: authorizationReducer,
  registration: registrationReducer,
  lists: listsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
