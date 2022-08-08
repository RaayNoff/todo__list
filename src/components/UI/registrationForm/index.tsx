import React, { FC, SyntheticEvent, useRef } from "react";
import s from "./registrationForm.module.scss";

const RegistrationForm: FC = () => {
  const loginRef = useRef() as React.MutableRefObject<HTMLInputElement | null>;
  const passwordRef =
    useRef() as React.MutableRefObject<HTMLInputElement | null>;

  const onClickHandler = (e: SyntheticEvent): void => {
    e.preventDefault();
  };

  return (
    <section style={{ margin: 20 }} className={s.registration}>
      <form className={s.form}>
        <header className={s.form__title}>Регистрация</header>
        <div className={`${s.form__input} ${s.input}`}>
          <header className={s.input__title}>Email</header>
          <input
            id="login"
            ref={loginRef}
            onChange={(e) => e.currentTarget.value}
            type="text"
          />
        </div>
        <div className={`${s.form__input} ${s.input}`}>
          <header className={s.input__title}>Пароль</header>
          <input
            id="password"
            type="password"
            autoComplete="on"
            ref={passwordRef}
            onChange={(e) => e.currentTarget.value}
          />
        </div>
        <button onClick={onClickHandler} className={s.form__button}>
          Зарегистрироваться
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
