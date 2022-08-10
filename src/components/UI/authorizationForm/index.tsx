import React, { FC, SyntheticEvent, useRef } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import s from "./authorizationForm.module.scss";

const AuthorizationForm: FC = () => {
  const loginRef = useRef() as React.MutableRefObject<HTMLInputElement | null>;
  const passwordRef =
    useRef() as React.MutableRefObject<HTMLInputElement | null>;

  const { error, loading } = useTypedSelector((state) => state.authorization);
  const { fetchAuthorization } = useActions();

  const onClickHandler = (e: SyntheticEvent): void => {
    e.preventDefault();
    fetchAuthorization(loginRef.current?.value, passwordRef.current?.value);
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

        {loading ? (
          <p>Идет загрузка...</p>
        ) : (
          <button onClick={onClickHandler} className={s.form__button}>
            Войти
          </button>
        )}
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
