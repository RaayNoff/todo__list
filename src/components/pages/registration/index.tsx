import React, { FC } from "react";
import Header from "../../common/header";
import AuthorizationForm from "../../UI/authorizationForm";
import checklist from "../../../icons/welcomeImg.jpg";
import s from "./registration.module.scss";

const Registration: FC = () => {
  return (
    <main>
      <Header></Header>
      <section className={s.registration}>
        <div className="container">
          <section className={s.registration__content}>
            <section className={s.welcome}>
              <header className={s.welcome__message}>
                Добро пожаловать на сайт <br /> todoLIST
              </header>
              <img src={checklist} alt="checklist"></img>
            </section>
            <AuthorizationForm />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Registration;
