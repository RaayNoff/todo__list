import { FC, useEffect } from "react";
import { localStorageApi } from "./api/localStorageApi";
import AppRouter from "./components/utils/AppRouter";
import { useActions } from "./hooks/useActions";

const App: FC = () => {
  const isDev = true;
  const { checkAuth } = useActions();

  useEffect(() => {
    if (localStorageApi.isTokenExist()) checkAuth();
  }, [checkAuth]);

  return <AppRouter developing={isDev}></AppRouter>;
};

export default App;
