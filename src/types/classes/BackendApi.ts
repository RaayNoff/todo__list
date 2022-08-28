export default class BackendApi {
  static LOCATION = "https://26.202.142.249:8843";

  static REGISTRATION = `${this.LOCATION}/api/auth/signup`;
  static LOGIN = `${this.LOCATION}/api/auth/signin`;
  static FETCH_LISTS = `${this.LOCATION}/api/lists`;
  static REFRESH = `${this.LOCATION}/api/auth/refresh`;
  static TEST = `${this.LOCATION}/api/auth/cookie`;
  static TASK = "/api/task";
  static LIST = "/api/lists/add";
}
