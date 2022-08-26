import { createSlice } from "@reduxjs/toolkit";
import useTasks from "../../hooks/useTasks";
import { HomeContentDisplaying } from "../../types/enums/HomeContentDisplaying";
import { IHomeContentState } from "../../types/states/IHomeContentState";

const initialState: IHomeContentState = {
  nowDisplaying: HomeContentDisplaying.TODAY_TASKS,
  listId: 1,
};

const homeContentSlice = createSlice({
  name: "homeContent",
  initialState: initialState,
  reducers: {
    displayToday: (state) => {
      state.nowDisplaying = HomeContentDisplaying.TODAY_TASKS;
    },
  },
});

export default homeContentSlice;
