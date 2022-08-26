import React, { FC } from "react";
import Header from "../../common/header";
import checklist from "../../../icons/welcomeImg.jpg";
import AuthorizationForm from "../../UI/authorizationForm";
import { useActions } from "../../../hooks/useActions";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import s from "./signUp.module.scss";

const SingUp: FC = () => {
  const { fetchRegistration } = useActions();

  return (
    <main>
      <Header></Header>
      <section className={s.SingUp}>
        <div className={MaxWidthContainer.NON_AUTHORIZED}>
          <section className={s.SingUp__content}>
            <section className={s.welcome}>
              <header className={s.welcome__message}>
                Добро пожаловать на сайт <br /> todoLIST
              </header>
              <img src={checklist} alt="checklist"></img>
            </section>
            <AuthorizationForm fetchCallback={fetchRegistration} />
          </section>
        </div>
      </section>
    </main>
  );
};

export default SingUp;