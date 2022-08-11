import React, { FC } from "react";
import s from "./formHeader.module.scss";

interface IFormHeader {
  isSignUp: boolean;
}

const FormHeader: FC<IFormHeader> = ({ isSignUp }) => {
  return (
    <header className={s.title}>
      {isSignUp ? "Регистрация" : "Авторизация"}
    </header>
  );
};

export default FormHeader;
