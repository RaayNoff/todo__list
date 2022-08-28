import { AuthorizationActionTypes } from "../enums/AuthorizationActionTypes";
import { IUser } from "../models/IUser";

export interface IFetchLogin {
  type: AuthorizationActionTypes.FETCH_LOGIN;
}
export interface IFetchRegistration {
  type: AuthorizationActionTypes.FETCH_REGISTRATION;
}
export interface IFetchRefresh {
  type: AuthorizationActionTypes.FETCH_REFRESH;
}

export interface IFetchAuthorizationSuccess {
  type: AuthorizationActionTypes.FETCH_AUTHORIZATION_SUCCESS;
  payload: AuthResponse;
}

export interface IFetchAuthorizationError {
  type: AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR;
  payload: string;
}

export interface ILogout {
  type: AuthorizationActionTypes.LOGOUT;
}

export interface AuthResponse {
  accessToken: string;
  user: IUser;
}
