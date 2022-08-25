import React, { FC } from "react";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import s from "./button.module.scss";

interface IButtonProps {
  text: string;
  btnType: ButtonTypes;
  onClickCallback: (event: React.MouseEvent) => void;
}

const Button: FC<IButtonProps> = ({ text, btnType, onClickCallback }) => {
  return (
    <button
      type="button"
      className={
        btnType === ButtonTypes.ACTION
          ? `${s.button} ${s.button__action}`
          : `${s.button} ${s.button__cancel}`
      }
      onClick={(e) => onClickCallback(e)}
    >
      <span className={s.button__text}>{text}</span>
    </button>
  );
};

export default Button;
