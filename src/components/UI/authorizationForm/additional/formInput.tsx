import React, { FC } from "react";
import { FormInputType } from "../../../../types/formInput";
import s from "./formInput.module.scss";

interface IFormInput {
  inputType: FormInputType;
  value: any;
  onChangeValue: React.Dispatch<React.SetStateAction<any>>;
  setDisplayTip?: React.Dispatch<React.SetStateAction<any>>;
}

const FormInput: FC<IFormInput> = ({
  inputType = FormInputType.EMAIL,
  value,
  onChangeValue,
  setDisplayTip,
}) => {
  switch (inputType) {
    case FormInputType.EMAIL:
      return (
        <div className={`${s.input}`}>
          <header className={s.input__title}>Email</header>
          <input
            id="email"
            value={value}
            onChange={(e) => onChangeValue(e.currentTarget.value)}
            type="text"
          />
        </div>
      );

    case FormInputType.PASSWORD:
      return (
        <div className={`${s.input}`}>
          <header className={s.input__title}>Пароль</header>
          <input
            id="password"
            type="password"
            autoComplete="on"
            value={value}
            onFocus={setDisplayTip && (() => setDisplayTip(true))}
            onBlur={setDisplayTip && (() => setDisplayTip(false))}
            onChange={(e) => onChangeValue(e.currentTarget.value)}
          />
        </div>
      );
  }
};

export default FormInput;
