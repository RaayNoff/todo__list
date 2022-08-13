export interface IUser {
  email: userDataField;
  password?: userDataField;
}

export type userDataField = string | undefined;
