import React, { FC, SyntheticEvent } from "react";
import Loader from "../../loader";
import s from "./responseSection.module.scss";

interface IResponseSection {
  isLoading: boolean;
  isSignUp: boolean;
  callback: (e: SyntheticEvent) => void;
}

const ResponseSection: FC<IResponseSection> = ({
  isLoading,
  isSignUp,
  callback,
}) => {
  let buttonJSX: any;

  switch (isSignUp) {
    case true:
      buttonJSX = (
        <button className={`${s.button} ${s.btnUp}`} onClick={callback}>
          Зарегистрироваться
        </button>
      );
      break;

    case false:
      buttonJSX = (
        <button className={`${s.button} ${s.btnIn}`} onClick={callback}>
          Войти
        </button>
      );
      break;
  }

  const loaderJSX = <Loader isActive={isLoading} />;

  return (
    <div className={s.responseSection}>{isLoading ? loaderJSX : buttonJSX}</div>
  );
};

export default ResponseSection;
