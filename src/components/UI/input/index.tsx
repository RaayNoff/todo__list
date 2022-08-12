import React, { Dispatch, FC, SetStateAction, SyntheticEvent } from "react";
import { InputSizeTypes } from "../../../types/input";
import s from "./input.module.scss";

interface IInputProps {
  title?: string;
  inputValue: string | undefined;
  size: InputSizeTypes;
  onChangeCallback: Dispatch<SetStateAction<string>>;
}

const Input: FC<IInputProps> = ({
  title,
  inputValue,
  size,
  onChangeCallback,
}) => {
  let inputJSX;
  switch (size) {
    case InputSizeTypes.BIG:
      inputJSX = (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onChangeCallback(e.currentTarget.value)}
          className={s.input__sizeBig}
        ></input>
      );
      break;

    case InputSizeTypes.MEDIUM:
      inputJSX = (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onChangeCallback(e.currentTarget.value)}
          className={s.input__sizeMed}
        ></input>
      );
      break;

    default:
      inputJSX = <></>;
      break;
  }

  return (
    <section className={s.input}>
      <header className={s.input__header}>{title}</header>
      {inputJSX}
    </section>
  );
};

export default Input;
