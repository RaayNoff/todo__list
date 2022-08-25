import { combineReducers } from "redux";
import { listApi } from "../../services/listApi";
import list from "./listSlice";
import authorization from "./authorizationSlice";
import popups from "./popupsSlice";

export const rootReducer = combineReducers({
  popups: popups.reducer,
  authorization: authorization.reducer,
  list: list.reducer,
  [listApi.reducerPath]: listApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
