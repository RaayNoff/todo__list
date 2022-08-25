import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/models/IUser";
import { IAuthorizationState } from "../../types/states/IAuthorizationState";

const initialState: IAuthorizationState = {
  loading: false,
  error: "",
  isAuthorized: false,
  user: {} as IUser,
};

export const AuthorizationSlice = createSlice({
  name: "authorization",
  initialState: initialState,
  reducers: {
    fetchAuthorization(state) {
      state.loading = true;
      state.error = "";
    },
    fetchAuthorizationError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchAuthorizationSuccess(state, action: PayloadAction<IUser>) {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
      state.isAuthorized = true;
    },
    fetchAuthorizationRefresh(state) {
      state.loading = true;
    },
    authorizationLogout(state) {
      state.loading = false;
      state.user = {} as IUser;
      state.isAuthorized = false;
      state.error = "";
    },
    authorizationResetError(state) {
      state.error = "";
    },
    fetchAuthorizationRefreshError(state) {
      state.loading = false;
    },
  },
});

export default AuthorizationSlice;
