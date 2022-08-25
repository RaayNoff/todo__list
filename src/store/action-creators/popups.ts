import { AppDispatch } from "..";
import PopupsSlice from "../reducers/popupsSlice";

export const createListToggleOn = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.createListToggleOn());
};
export const createListToggleOff = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.createListToggleOff());
};
export const listInfoToggleOn = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.listInfoToggleOn());
};
export const listInfoToggleOff = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.listInfoToggleOff());
};
export const shareListToggleOn =
  (listId: number) => (dispatch: AppDispatch) => {
    dispatch(PopupsSlice.actions.shareListToggleOn(listId));
  };
export const shareListToggleOff = () => (dispatch: AppDispatch) => {
  dispatch(PopupsSlice.actions.shareListToggleOff());
};
