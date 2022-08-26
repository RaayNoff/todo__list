import React, { FC } from "react";
import { useActions } from "../../../hooks/useActions";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import Button from "../../UI/button";

const Test: FC = () => {
  const { testCokie } = useActions();

  const test = (e: React.MouseEvent) => {
    testCokie();
  };

  return (
    <div
      style={{
        backgroundColor: "#525252",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        btnType={ButtonTypes.ACTION}
        onClickCallback={test}
        text="Отправить"
      />
    </div>
  );
};

export default Test;
