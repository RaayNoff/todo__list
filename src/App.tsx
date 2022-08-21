import { FC, useEffect } from "react";
import AppRouter from "./components/utils/AppRouter";
import { useActions } from "./hooks/useActions";

const App: FC = () => {
  const isDev = false;
  const { checkAuth } = useActions();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return <AppRouter developing={isDev}></AppRouter>;
};

export default App;
