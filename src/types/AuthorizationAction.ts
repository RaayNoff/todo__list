import {
  IFetchAuthorizationError,
  IFetchAuthorizationSuccess,
  IFetchLogin,
  IFetchRefresh,
  IFetchRegistration,
  ILogout,
} from "./interfaces/Authorization";

export type AuthorizationAction =
  | IFetchLogin
  | IFetchRegistration
  | IFetchRefresh
  | IFetchAuthorizationSuccess
  | IFetchAuthorizationError
  | ILogout;
