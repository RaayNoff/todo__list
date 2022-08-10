export interface IUser {
  login: userDataField;
  password: userDataField;
}

export type userDataField = string | undefined;
