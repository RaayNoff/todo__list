import React, { FC } from "react";
import s from "./tip.module.scss";

interface ITipProps {
  tipState: boolean[];
}

const Tip: FC<ITipProps> = ({ tipState }) => {
  return (
    <div className={s.tip}>
      {tipState[0] === false ? (
        <p className={`${s.tip__message} ${s.tip__error}`}>
          Длина пароля минимум 8 символов
        </p>
      ) : (
        <p className={`${s.tip__message} ${s.tip__success}`}>
          Длина пароля минимум 8 символов
        </p>
      )}
      {tipState[1] === false ? (
        <p className={`${s.tip__message} ${s.tip__error}`}>
          Содержит хотя бы одну заглавную букву
        </p>
      ) : (
        <p className={`${s.tip__message} ${s.tip__success}`}>
          Содержит хотя бы одну заглавную букву
        </p>
      )}
      {tipState[2] === false ? (
        <p className={`${s.tip__message} ${s.tip__error}`}>
          Включает по крайней мере один специальный символ
        </p>
      ) : (
        <p className={`${s.tip__message} ${s.tip__success}`}>
          Включает по крайней мере один специальный символ
        </p>
      )}
    </div>
  );
};

export default Tip;
