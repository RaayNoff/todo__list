import { FC, useEffect } from "react";
import { localStorageApi } from "./api/localStorageApi";
import AppRouter from "./components/utils/AppRouter";
import { useActions } from "./hooks/useActions";

const App: FC = () => {
  const isDev = false;
  const { refresh } = useActions();

  useEffect(() => {
    if (localStorageApi.isTokenExist()) refresh();
  }, [refresh]);

  return <AppRouter developing={isDev}></AppRouter>;
};

export default App;
