import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import SingIn from "./components/pages/signin";
import SignUp from "./components/pages/singup";
import Test from "./components/pages/test";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SingIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </div>
  );
}

export default App;
