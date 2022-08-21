export interface IRoute {
  id: number;
  path: string;
  component: JSX.Element;
}

export enum RoutePath {
  HOME = "/home",
  SIGNUP = "/signup",
  SIGNIN = "/signin",
  NOROUTE = "/",
}
