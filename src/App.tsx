import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import SingIn from "./components/pages/signin";
import SignUp from "./components/pages/singup";
import Test from "./components/pages/test";
import { useActions } from "./hooks/useActions";
import { useTypedSelector } from "./hooks/useTypedSelector";

function App() {
  const isDev = true;
  const { checkAuth } = useActions();
  const { isAuthorized } = useTypedSelector((state) => state.authorization);

  useEffect(() => {
    checkAuth();
  }, []);

  if (isDev)
    return (
      <div>
        <Routes>
          <Route path="/signin" element={<SingIn />}></Route>
          <Route path="*" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </div>
    );

  if (!isAuthorized)
    return (
      <div>
        <Routes>
          <Route path="/signin" element={<SingIn />}></Route>
          <Route path="*" element={<SignUp />}></Route>
        </Routes>
      </div>
    );

  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
