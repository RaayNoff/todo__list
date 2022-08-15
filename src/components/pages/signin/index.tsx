import React, { FC } from "react";
import Header from "../../common/header";
import AuthorizationForm from "../../UI/authorizationForm";
import checklist from "../../../icons/welcomeImg.jpg";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { MaxWidthContainer } from "../../../types/maxWidthContainer";
import s from "./singIn.module.scss";

const SingIn: FC = () => {
  const { fetchAuthorization } = useActions();
  const { error, loading } = useTypedSelector((state) => state.authorization);
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
            <AuthorizationForm
              isSignUp={false}
              fetchCallback={fetchAuthorization}
              error={error}
              loading={loading}
            />
          </section>
        </div>
      </section>
    </main>
  );
};

export default SingIn;
