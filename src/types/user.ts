export interface IUser {
  id: userDataField;
  email: userDataField;
  password?: userDataField;
}

export type userDataField = string | undefined;
