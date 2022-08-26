import { AppDispatch } from "..";
import homeContentSlice from "../reducers/homeContentSlice";

export const displayToday = () => (dispatch: AppDispatch) => {
  dispatch(homeContentSlice.actions.displayToday());
};
