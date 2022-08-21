import React, { FC } from "react";
import Header from "../../common/header";
import AuthorizationForm from "../../UI/authorizationForm";
import checklist from "../../../icons/welcomeImg.jpg";
import { useActions } from "../../../hooks/useActions";
import { MaxWidthContainer } from "../../../types/maxWidthContainer";
import s from "./singIn.module.scss";

const SingIn: FC = () => {
  const { login } = useActions();
  return (
    <main>
      <Header></Header>
      <section className={s.singIn}>
        <div className={MaxWidthContainer.NON_AUTHORIZED}>
          <section className={s.singIn__content}>
            <section className={s.welcome}>
              <header className={s.welcome__message}>
                Добро пожаловать на сайт <br /> todoLIST
              </header>
              <img src={checklist} alt="checklist"></img>
            </section>
            <AuthorizationForm fetchCallback={login} />
          </section>
        </div>
      </section>
    </main>
  );
};

export default SingIn;
