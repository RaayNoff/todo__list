import { IUser } from "../models/IUser";

export interface IAuthorizationState {
  loading: boolean;
  error: null | string;
  isAuthorized: boolean;
  user: IUser | null;
}
