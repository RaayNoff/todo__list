import { FC } from "react";
import usePath from "../../../../hooks/usePath";
import s from "./formHeader.module.scss";

const FormHeader: FC = () => {
  const isRegistration = usePath();

  return (
    <header className={s.title}>
      {isRegistration ? "Регистрация" : "Авторизация"}
    </header>
  );
};

export default FormHeader;
