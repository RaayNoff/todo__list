import { FC } from "react";
import { Link } from "react-router-dom";

import usePath from "../../../../hooks/usePath";

import s from "./formFooter.module.scss";

const FormFooter: FC = () => {
  const isRegistration = usePath();

  return (
    <footer className={s.footer}>
      {isRegistration ? "Уже зарегистрированы?" : "Нет аккаунта?"}{" "}
      <span>
        <Link to={isRegistration ? "/signin" : "/signup"}>
          {isRegistration ? "Войдите" : "Зарегистрируйтесь"}
        </Link>
      </span>
    </footer>
  );
};

export default FormFooter;
