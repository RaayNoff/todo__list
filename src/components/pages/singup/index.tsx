import React, { FC } from "react";
import Header from "../../common/header";
import checklist from "../../../icons/welcomeImg.jpg";
import AuthorizationForm from "../../UI/authorizationForm";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { MaxWidthContainer } from "../../../types/maxWidthContainer";
import s from "./signUp.module.scss";

const SingUp: FC = () => {
  const { registration } = useActions();
  const { error, loading } = useTypedSelector((state) => state.authorization);

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
            <AuthorizationForm
              isSignUp={true}
              fetchCallback={registration}
              error={error}
              loading={loading}
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default SingUp;
