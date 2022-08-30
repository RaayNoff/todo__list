import { Navigate } from "react-router-dom";
import Home from "../components/pages/home";
import SingIn from "../components/pages/signin";
import SingUp from "../components/pages/singup";
import Test from "../components/pages/test";
import { RoutePath } from "../types/enums/RoutePath";
import { IRoute } from "../types/models/IRoute";

export const privateRoutes: IRoute[] = [
  { id: 1, path: RoutePath.HOME, component: <Home /> },
  {
    id: 2,
    path: RoutePath.NOROUTE,
    component: <Navigate to={RoutePath.HOME} />,
  },
];

export const publicRoutes: IRoute[] = [
  { id: 1, path: RoutePath.SIGNUP, component: <SingUp /> },
  { id: 2, path: RoutePath.SIGNIN, component: <SingIn /> },
  {
    id: 3,
    path: RoutePath.NOROUTE,
    component: <Navigate to={RoutePath.SIGNIN} />,
  },
];

export const developerRoutes: IRoute[] = [
  { id: 1, path: "/test", component: <Test /> },
];
