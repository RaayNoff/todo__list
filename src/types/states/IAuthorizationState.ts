import { IUser } from "../models/IUser";

export interface IAuthorizationState {
  loading: boolean;
  error: string;
  isAuthorized: boolean;
  user: IUser;
}
