import { AppDispatch } from "..";
import { LockAPI } from "../../api/lockApi";
import sidebarSlice from "../reducers/sidebarSlice";

export const sidebarToggle = (bool: boolean) => (dispatch: AppDispatch) => {
  dispatch(sidebarSlice.actions.sidebarToggle(bool));
  const mediaQuery = window.matchMedia("(max-width: 768.98px)");
  if (mediaQuery.matches) LockAPI.toggleScrollLock();
};
