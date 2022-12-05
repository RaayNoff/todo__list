import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { HomeContentDisplaying } from "../../types/enums/HomeContentDisplaying";
import { IHomeContentState } from "../../types/states/IHomeContentState";

const initialState: IHomeContentState = {
	nowDisplaying: HomeContentDisplaying.TODAY_TASKS,
	listId: -1,
};

const homeContentSlice = createSlice({
	name: "homeContent",
	initialState: initialState,
	reducers: {
		displayToday: (state) => {
			state.nowDisplaying = HomeContentDisplaying.TODAY_TASKS;
		},
		displayFuture: (state) => {
			state.nowDisplaying = HomeContentDisplaying.FUTURE_TASKS;
		},
		displayList: (state, action: PayloadAction<number>) => {
			state.nowDisplaying = HomeContentDisplaying.LIST;
			state.listId = action.payload;
		},
		listDelete: (state) => {
			state.nowDisplaying = HomeContentDisplaying.TODAY_TASKS;
			state.listId = -1;
		},
	},
});

export default homeContentSlice;
