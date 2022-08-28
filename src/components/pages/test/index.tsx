import React, { FC } from "react";
import { useActions } from "../../../hooks/useActions";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import Button from "../../UI/button";

const Test: FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#525252",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></div>
  );
};

export default Test;
