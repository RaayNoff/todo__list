import { IUser } from "./user";

export interface IAuthorizationState {
  loading: boolean;
  error: null | string;
}

export enum AuthorizationActionTypes {
  FETCH_AUTHORIZATION = "FETCH_AUTHORIZATION",
  FETCH_AUTHORIZATION__SUCCESS = "FETCH_AUTHORIZATION__SUCCESS",
  FETCH_AUTHORIZATION_ERROR = "FETCH_AUTHORIZATION_ERROR",
}

interface IFetchAuthorization {
  type: AuthorizationActionTypes.FETCH_AUTHORIZATION;
}

interface IFetchAuthorizationSuccess {
  type: AuthorizationActionTypes.FETCH_AUTHORIZATION__SUCCESS;
}

interface IFetchAuthorizationError {
  type: AuthorizationActionTypes.FETCH_AUTHORIZATION_ERROR;
  payload: string;
}

export type authorizationAction =
  | IFetchAuthorization
  | IFetchAuthorizationSuccess
  | IFetchAuthorizationError;
