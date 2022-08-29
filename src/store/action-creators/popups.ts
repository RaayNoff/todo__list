import { AppDispatch } from "..";
import PopupsSlice from "../reducers/popupsSlice";

export const createListToggleOn = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.createListToggleOn());
};
export const createListToggleOff = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.createListToggleOff());
};
export const taskInfoToggleOn = (taskId: number) => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.taskInfoToggleOn(taskId));
};
export const taskInfoToggleOff = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.taskInfoToggleOff());
};
export const shareListToggleOn =
  (listId: number) => (dispatch: AppDispatch) => {
    dispatch(PopupsSlice.actions.shareListToggleOn(listId));
  };
export const shareListToggleOff = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.shareListToggleOff());
};

export const editListToggleOn = (listId: number) => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.editListToggleOn(listId));
};

export const editListToggleOff = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.editListToggleOff());
};
