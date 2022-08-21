import React, { FC, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import useEmailTip from "../../../../hooks/useEmailTip";
import usePasswordTip from "../../../../hooks/usePasswordTip";
import usePath from "../../../../hooks/usePath";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { FormInputType } from "../../../../types/formInput";
import Tip from "../../tip";
import s from "./formInput.module.scss";

interface IFormInput {
  inputType: FormInputType;
  value: any;
  onChangeValue: React.Dispatch<React.SetStateAction<any>>;
}

const FormInput: FC<IFormInput> = ({
  inputType = FormInputType.EMAIL,
  value,
  onChangeValue,
}) => {
  const [displayTip, setDisplayTip] = useState(false);
  const display = usePath();
  const { loading } = useTypedSelector((state) => state.authorization);

  const passwordTip = usePasswordTip(value);
  const emailTip = useEmailTip(value);

  return (
    <div className={s.input}>
      <header className={s.input__title}>
        {inputType === FormInputType.EMAIL ? "Email" : "Пароль"}
      </header>
      <input
        type={inputType === FormInputType.EMAIL ? "text" : "password"}
        autoComplete={inputType === FormInputType.PASSWORD ? "on" : "off"}
        value={value}
        onChange={(e) => onChangeValue(e.currentTarget.value)}
        onFocus={() => setDisplayTip(!displayTip)}
        onBlur={() => setDisplayTip(!displayTip)}
        disabled={loading}
      />
      <TransitionGroup>
        {displayTip && display && (
          <CSSTransition timeout={300} classNames={"tip"}>
            <Tip
              content={
                inputType === FormInputType.EMAIL ? emailTip : passwordTip
              }
            />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default FormInput;
