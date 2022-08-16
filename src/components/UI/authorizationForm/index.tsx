import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ValidationApi } from "../../../api/validationApi";
import { authorizationType } from "../../../store/action-creators/authorization";
import Tip from "../tip";
import FormFooter from "./additional/formFooter";
import FormHeader from "./additional/formHeader";
import ResponseSection from "./additional/responseSection";
import s from "./authorizationForm.module.scss";
import "./tips.animation.scss";

interface IAuthorizationProps {
  isSignUp: boolean;
  fetchCallback: authorizationType;
  loading: boolean;
  error: null | string;
}

const AuthorizationForm: FC<IAuthorizationProps> = ({
  isSignUp,
  fetchCallback,
  loading,
  error,
}) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [displayTip, setDisplayTip] = useState<boolean>(false);
  const [passwordState, setPasswordState] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const onClickHandler = (e: SyntheticEvent): void => {
    e.preventDefault();

    //  console.log(`${login}:${password}`);

    if (isSignUp && passwordState.indexOf(false) === -1) {
      fetchCallback(login, password);
    }
    if (!isSignUp) fetchCallback(login, password);
  };

  useEffect(() => {
    if (isSignUp) setPasswordState(ValidationApi.validatePassword(password));
  }, [password, isSignUp]);

  return (
    <section className={s.authorization}>
      <form className={s.form}>
        <FormHeader isSignUp={isSignUp}></FormHeader>
        <div className={`${s.form__input} ${s.input}`}>
          <header className={s.input__title}>Email</header>
          <input
            id="login"
            value={login}
            onChange={(e) => setLogin(e.currentTarget.value)}
            type="text"
          />
        </div>
        <div className={`${s.form__input} ${s.input}`}>
          <header className={s.input__title}>Пароль</header>
          <input
            id="password"
            type="password"
            autoComplete="on"
            value={password}
            onFocus={() => setDisplayTip(true)}
            onBlur={() => setDisplayTip(false)}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </div>

        <p className={s.form__error}>{error}</p>

        {displayTip && isSignUp && (
          <TransitionGroup>
            <CSSTransition timeout={500} classNames="tips">
              <Tip tipState={passwordState}></Tip>
            </CSSTransition>
          </TransitionGroup>
        )}
        <ResponseSection
          callback={onClickHandler}
          isLoading={loading}
          isSignUp={isSignUp}
        ></ResponseSection>
        <FormFooter isSignUp={isSignUp}></FormFooter>
      </form>
    </section>
  );
};

export default AuthorizationForm;
