import { IFetchRegistration } from "./interfaces/Authorization";
import {
  IFetchRegistrationError,
  IFetchRegistrationSuccess,
} from "./interfaces/Registration";

export type registrationAction =
  | IFetchRegistration
  | IFetchRegistrationSuccess
  | IFetchRegistrationError;
