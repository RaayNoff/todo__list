import React, { FC } from "react";
import { Link } from "react-router-dom";
import s from "./formFooter.module.scss";

interface IFormFooter {
  isSignUp: boolean;
}

const FormFooter: FC<IFormFooter> = ({ isSignUp }) => {
  if (isSignUp)
    return (
      <footer className={s.footer}>
        Уже зарегистрированы?{" "}
        <span>
          <Link to="/signin">Войдите</Link>
        </span>
      </footer>
    );

  return (
    <footer className={s.footer}>
      Нет аккаунта?{" "}
      <span>
        <Link to="/signup">Зарегистрируйтесь</Link>{" "}
      </span>
    </footer>
  );
};

export default FormFooter;
