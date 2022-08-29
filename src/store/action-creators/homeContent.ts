import { AppDispatch } from "..";
import homeContentSlice from "../reducers/homeContentSlice";

export const displayToday = () => (dispatch: AppDispatch) => {
  dispatch(homeContentSlice.actions.displayToday());
};

export const displayFuture = () => (dispatch: AppDispatch) => {
  dispatch(homeContentSlice.actions.displayFuture());
};

export const displayList = (listId: number) => (dispatch: AppDispatch) => {
  dispatch(homeContentSlice.actions.displayList(listId));
};
