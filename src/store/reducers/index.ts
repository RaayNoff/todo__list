import { combineReducers } from "redux";
import { listApi } from "../../services/listApi";
import { taskApi } from "../../services/taskApi";
import list from "./listSlice";
import authorization from "./authorizationSlice";
import popups from "./popupsSlice";
import homeContentSlice from "./homeContentSlice";

export const rootReducer = combineReducers({
  homeContent: homeContentSlice.reducer,
  popups: popups.reducer,
  authorization: authorization.reducer,
  list: list.reducer,
  [listApi.reducerPath]: listApi.reducer,
  [taskApi.reducerPath]: taskApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
