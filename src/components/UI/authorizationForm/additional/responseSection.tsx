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
  return (
    <div className={s.responseSection}>
      {isLoading ? (
        <Loader isActive={isLoading} />
      ) : (
        <button
          className={
            isSignUp ? `${s.button} ${s.btnUp}` : `${s.button} ${s.btnIn}`
          }
          onClick={callback}
        >
          {isSignUp ? "Зарегистрироваться" : "Войти"}
        </button>
      )}
    </div>
  );
};

export default ResponseSection;
