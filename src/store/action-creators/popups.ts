import { AppDispatch } from "..";
import { LockAPI } from "../../api/lockApi";
import PopupsSlice from "../reducers/popupsSlice";

export const createListToggleOn = () => (dispatch: AppDispatch) => {
  LockAPI.toggleScrollLock();
  dispatch(PopupsSlice.actions.createListToggleOn());
};
export const createListToggleOff = () => (dispatch: AppDispatch) => {
  LockAPI.toggleScrollLock();
  dispatch(PopupsSlice.actions.createListToggleOff());
};
export const taskInfoToggleOn = (taskId: number) => (dispatch: AppDispatch) => {
  LockAPI.toggleScrollLock();
  dispatch(PopupsSlice.actions.taskInfoToggleOn(taskId));
};
export const taskInfoToggleOff = () => (dispatch: AppDispatch) => {
  LockAPI.toggleScrollLock();
  dispatch(PopupsSlice.actions.taskInfoToggleOff());
};
export const shareListToggleOn =
  (listId: number) => (dispatch: AppDispatch) => {
    LockAPI.toggleScrollLock();
    dispatch(PopupsSlice.actions.shareListToggleOn(listId));
  };
export const shareListToggleOff = () => (dispatch: AppDispatch) => {
  LockAPI.toggleScrollLock();
  dispatch(PopupsSlice.actions.shareListToggleOff());
};

export const editListToggleOn = (listId: number) => (dispatch: AppDispatch) => {
  LockAPI.toggleScrollLock();
  dispatch(PopupsSlice.actions.editListToggleOn(listId));
};

export const editListToggleOff = () => (dispatch: AppDispatch) => {
  LockAPI.toggleScrollLock();
  dispatch(PopupsSlice.actions.editListToggleOff());
};
export const setLastDeletedTask =
  (taskId: number) => (dispatch: AppDispatch) => {
    dispatch(PopupsSlice.actions.setLastDeletedTask(taskId));
  };
