import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPopupsState } from "../../types/states/IPopupsState";

const initialState: IPopupsState = {
  createList: false,
  taskInfo: {
    status: false,
    currentTaskId: 1,
  },
  shareList: {
    status: false,
    currentListId: 1,
  },
  editList: {
    status: false,
    currentlistId: 1,
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
    taskInfoToggleOn(state, action: PayloadAction<number>) {
      state.taskInfo.currentTaskId = action.payload;
      state.taskInfo.status = true;
    },
    taskInfoToggleOff(state) {
      state.taskInfo.status = false;
    },
    shareListToggleOn(state, action: PayloadAction<number>) {
      state.shareList.status = true;
      state.shareList.currentListId = action.payload;
    },
    shareListToggleOff(state) {
      state.shareList.status = false;
      state.shareList.currentListId = 1;
    },
    editListToggleOn(state, action: PayloadAction<number>) {
      state.editList.status = true;
      state.editList.currentlistId = action.payload;
    },
    editListToggleOff(state) {
      state.editList.status = false;
    },
  },
});

export default PopupsSlice;
