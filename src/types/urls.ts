export default class BackendApi {
  static LOCATION = "http://37.22.100.251:8080";

  static REGISTRATION = `${this.LOCATION}/api/auth/signup`;
  static LOGIN = `${this.LOCATION}/api/auth/signin`;
  static FETCH_LISTS = `${this.LOCATION}/api/lists/all`;
  static REFRESH = `${this.LOCATION}/api/auth/refresh`;
}
