import PasswordValidator from "password-validator";
import * as EmailValidator from "email-validator";

export class ValidationApi {
  static isEmpty = (data: string | undefined): boolean => {
    return data === "" || data === undefined;
  };

  static validatePassword = (password: string): boolean[] => {
    const patternMinLenght = new PasswordValidator().is().min(8);
    const patternUppercase = new PasswordValidator().has().uppercase();
    const patternHasSymbols = new PasswordValidator().has().symbols();
    const result: boolean[] = [false, false, false];

    if (password.length === 0) return result;

    if (patternMinLenght.validate(password)) result[0] = true;

    if (patternUppercase.validate(password)) result[1] = true;

    if (patternHasSymbols.validate(password)) result[2] = true;

    return result;
  };

  static validateEmail = (email: string) => {
    if (EmailValidator.validate(email)) return true;

    return false;
  };
}
