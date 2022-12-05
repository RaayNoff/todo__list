import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { privateRoutes, publicRoutes } from "../../router";

interface IAppRouter {
  developing?: boolean;
}

const AppRouter: FC<IAppRouter> = ({ developing = false }) => {
  const { isAuthorized } = useTypedSelector((state) => state.authorization);

  if (developing)
    return (
      <Routes>
        {privateRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={route.component}
          ></Route>
        ))}
        {publicRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={route.component}
          ></Route>
        ))}
      </Routes>
    );

  return (
    <div>
      {isAuthorized ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={route.component}
            ></Route>
          ))}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={route.component}
            ></Route>
          ))}
        </Routes>
      )}
    </div>
  );
};

export default AppRouter;
