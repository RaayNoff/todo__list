import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPopupsState } from "../../types/states/IPopupsState";

const initialState: IPopupsState = {
  createList: false,
  listInfo: false,
  shareList: {
    status: false,
    currentListId: 1,
  },
};

const PopupsSlice = createSlice({
  name: "popups",
  initialState: initialState,
  reducers: {
    createListToggleOn(state) {
      state.createList = true;
    },
    createListToggleOff(state) {
      state.createList = false;
    },
    listInfoToggleOn(state) {
      state.listInfo = true;
    },
    listInfoToggleOff(state) {
      state.listInfo = false;
    },
    shareListToggleOn(state, action: PayloadAction<number>) {
      state.shareList.status = true;
      state.shareList.currentListId = action.payload;
    },
    shareListToggleOff(state) {
      state.shareList.status = false;
      state.shareList.currentListId = 1;
    },
  },
});

export default PopupsSlice;
