import { Dispatch, FC, SetStateAction } from "react";
import { InputSizeTypes } from "../../../types/input";
import s from "./input.module.scss";

interface IInputProps {
  title?: string;
  inputValue: string | undefined;
  size: InputSizeTypes;
  placeholder?: string;
  onChangeCallback: Dispatch<SetStateAction<string>>;
}

const Input: FC<IInputProps> = ({
  title,
  inputValue,
  size,
  onChangeCallback,
  placeholder,
}) => {
  return (
    <section className={s.input}>
      <header className={s.input__header}>{title}</header>
      <input
        type="text"
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => onChangeCallback(e.currentTarget.value)}
        className={
          size === InputSizeTypes.BIG ? s.input__sizeBig : s.input__sizeMed
        }
      ></input>
    </section>
  );
};

export default Input;
