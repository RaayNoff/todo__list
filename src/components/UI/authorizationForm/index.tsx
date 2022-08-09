import React, { FC, SyntheticEvent, useRef } from "react";
import { Link } from "react-router-dom";
import s from "./authorizationForm.module.scss";

const AuthorizationForm: FC = () => {
  const loginRef = useRef() as React.MutableRefObject<HTMLInputElement | null>;
  const passwordRef =
    useRef() as React.MutableRefObject<HTMLInputElement | null>;

  const onClickHandler = (e: SyntheticEvent): void => {
    e.preventDefault();
  };

  return (
    <section style={{ margin: 20 }} className={s.authorization}>
      <form className={s.form}>
        <header className={s.form__title}>Авторизация</header>
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
          Войти
        </button>
        <footer className={s.registration}>
          Нет аккаунта?{" "}
          <span>
            <Link to=" ">Зарегистрируйтесь</Link>
          </span>
        </footer>
      </form>
    </section>
  );
};

export default AuthorizationForm;
