export default class BackendApi {
  static LOCATION = "https://todolistbackendapi.herokuapp.com";

  static REGISTRATION = "/api/auth/signup";
  static LOGIN = "/api/auth/signin";
  static REFRESH = "/api/auth/refresh";
  static LOGOUT = "/api/auth/logout";

  static FETCH_LISTS = "/api/lists";
  static FETCH_LISTS_ADD = `${this.FETCH_LISTS}/add`;
  static FETCH_LISTS_EDIT = `${this.FETCH_LISTS}/edit`;
  static FETCH_LISTS_DELETE = `${this.FETCH_LISTS}/del`;
  static FETCH_LISTS_SHARE = `${this.FETCH_LISTS}/share`;

  static FETCH_TASKS = "/api/tasks";
  static FETCH_TASKS_ADD = `${this.FETCH_TASKS}/add`;
  static FETCH_TASKS_EDIT = `${this.FETCH_TASKS}/edit`;
  static FETCH_TASKS_COMMENT = `${this.FETCH_TASKS}/comment`;
  static FETCH_TASKS_DELETE = `${this.FETCH_TASKS}/del`;
}
