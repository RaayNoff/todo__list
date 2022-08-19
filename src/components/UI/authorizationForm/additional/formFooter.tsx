import React, { FC } from "react";
import { Link } from "react-router-dom";
import s from "./formFooter.module.scss";

interface IFormFooter {
  isSignUp: boolean;
}

const FormFooter: FC<IFormFooter> = ({ isSignUp }) => {
  return (
    <footer className={s.footer}>
      {isSignUp ? "Уже зарегистрированы?" : "Нет аккаунта?"}{" "}
      <span>
        <Link to={isSignUp ? "/signin" : "/signup"}>
          {isSignUp ? "Войдите" : "Зарегистрируйтесь"}
        </Link>
      </span>
    </footer>
  );
};

export default FormFooter;
