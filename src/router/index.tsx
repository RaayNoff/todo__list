import Home from "../components/pages/home";
import SingIn from "../components/pages/signin";
import SingUp from "../components/pages/singup";
import Test from "../components/pages/test";
import { IRoute } from "../types/routes";

export const privateRoutes: IRoute[] = [
  { id: 1, path: "*", component: <Home /> },
];

export const publicRoutes: IRoute[] = [
  { id: 1, path: "*", component: <SingUp /> },
  { id: 2, path: "/signin", component: <SingIn /> },
];

export const developerRoutes: IRoute[] = [
  { id: 1, path: "/test", component: <Test /> },
];
