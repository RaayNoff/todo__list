export class localStorageApi {
  static setAccessToken(token: string) {
    localStorage.setItem("token", token);
  }

  static removeAccessToken() {
    localStorage.removeItem("token");
  }
}
