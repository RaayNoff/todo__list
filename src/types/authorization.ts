import { IUser } from "./user";

export interface IAuthorizationState {
  loading: boolean;
  error: null | string;
  isAuthorized: boolean;
  user: IUser | null;
}

export enum AuthorizationActionTypes {
  FETCH_LOGIN = "FETCH_AUTHORIZATION",
  FETCH_REGISTRATION = "FETCH_REGISTRATION",
  FETCH_AUTHORIZATION_SUCCESS = "FETCH_AUTHORIZATION__SUCCESS",
  FETCH_AUTHORIZATION_ERROR = "FETCH_AUTHORIZATION_ERROR",
  FETCH_REFRESH = "FETCH_REFRESH",
  LOGOUT = "LOGOUT",
}

interface IFetchLogin {
  type: AuthorizationActionTypes.FETCH_LOGIN;
}
interface IFetchRegistration {
  type: AuthorizationActionTypes.FETCH_REGISTRATION;
}
interface IFetchRefresh {
  type: AuthorizationActionTypes.FETCH_REFRESH;
}

interface IFetchAuthorizationSuccess {
  type: AuthorizationActionTypes.FETCH_AUTHORIZATION_SUCCESS;
  payload: AuthResponse;
}

interface IFetchAuthorizationError {
  type: AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR;
  payload: string;
}

interface ILogout {
  type: AuthorizationActionTypes.LOGOUT;
}

export type AuthorizationAction =
  | IFetchLogin
  | IFetchRegistration
  | IFetchRefresh
  | IFetchAuthorizationSuccess
  | IFetchAuthorizationError
  | ILogout;

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
