export interface IRegistrationState {
  loading: boolean;
  error: null | string;
}

export enum RegistrationActionTypes {
  FETCH_REGISTRATION = "FETCH_REGISTRATION",
  FETCH_REGISTRATION_SUCCESS = "FETCH_REGISTRATION_SUCCESS",
  FETCH_REGISTRATION_ERROR = "FETCH_REGISTRATION_ERROR",
}

interface IFetchRegistration {
  type: RegistrationActionTypes.FETCH_REGISTRATION;
}
interface IFetchRegistrationSuccess {
  type: RegistrationActionTypes.FETCH_REGISTRATION_SUCCESS;
}
interface IFetchRegistrationError {
  type: RegistrationActionTypes.FETCH_REGISTRATION_ERROR;
  payload: string;
}

export type registrationAction =
  | IFetchRegistration
  | IFetchRegistrationSuccess
  | IFetchRegistrationError;
