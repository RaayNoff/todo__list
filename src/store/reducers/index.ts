import { combineReducers } from "redux";
import { authorizationReducer } from "./authorizationReducer";
import { registrationReducer } from "./registrationReducer";

export const rootReducer = combineReducers({
  authorization: authorizationReducer,
  registration: registrationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
