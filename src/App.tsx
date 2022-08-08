import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Registration from "./components/pages/registration";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Registration />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
