import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthResponse } from "../../types/interfaces/Authorization";
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
    registration: (state) => {
      state.loading = true;
      state.error = "";
      state.isAuthorized = false;
    },
    registrationSuccess: (state, action: PayloadAction<IUser>) => {
      state.loading = false;
      state.error = "";
      state.isAuthorized = false;
      state.user = action.payload;
    },
    registrationError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthorized = false;
    },
    refresh: (state) => {
      state.loading = true;
      state.error = "";
    },
    refreshSuccess: (state) => {
      state.loading = false;
      state.error = "";
      state.isAuthorized = true;
    },
    refreshError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthorized = false;
      state.user = {} as IUser;
    },
    login: (state) => {
      state.loading = true;
      state.error = "";
    },
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.loading = false;
      state.error = "";
      state.isAuthorized = true;
      state.user = action.payload;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthorized = false;
      state.user = {} as IUser;
    },
    logout: (state) => {
      state.loading = false;
      state.error = "";
      state.isAuthorized = false;
      state.user = {} as IUser;
    },
  },
});

export default AuthorizationSlice;
