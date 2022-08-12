import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import s from "./formFooter.module.scss";

interface IFormFooter {
  isSignUp: boolean;
}

const FormFooter: FC<IFormFooter> = ({ isSignUp }) => {
  return (
    <footer className={s.footer}>
      {isSignUp ? "Нет аккаунта?" : "Уже зарегистрированы?"}{" "}
      <span>
        <Link to={isSignUp ? "/signin" : "/signup"}>
          {isSignUp ? "Зарегистрируйтесь" : "Войдите"}
        </Link>
      </span>
    </footer>
  );
};

export default FormFooter;
