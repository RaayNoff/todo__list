export class localStorageApi {
  static setAccessToken(token: string) {
    localStorage.setItem("token", token);
  }

  static removeAccessToken() {
    localStorage.removeItem("token");
  }

  static isTokenExist() {
    if (!localStorage.getItem("token")) return false;

    return true;
  }
}
