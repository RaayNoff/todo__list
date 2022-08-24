import { RegistrationActionTypes } from "../enums/RegistrationActionTypes";

export interface IFetchRegistration {
  type: RegistrationActionTypes.FETCH_REGISTRATION;
}
export interface IFetchRegistrationSuccess {
  type: RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS;
}
export interface IFetchRegistrationError {
  type: RegistrationActionTypes.FETCH_REGISTRATION_ERROR;
  payload: string;
}
