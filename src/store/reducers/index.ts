import { combineReducers } from "redux";

import { contentApi } from "../../services/contentApi";

import authorization from "./authorizationSlice";
import popups from "./popupsSlice";
import homeContentSlice from "./homeContentSlice";
import sidebarSlice from "./sidebarSlice";

export const rootReducer = combineReducers({
	homeContent: homeContentSlice.reducer,
	popups: popups.reducer,
	sidebar: sidebarSlice.reducer,
	authorization: authorization.reducer,
	[contentApi.reducerPath]: contentApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
