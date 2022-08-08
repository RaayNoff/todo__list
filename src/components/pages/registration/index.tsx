import React, { FC } from "react";
import Header from "../../common/header";
import RegistrationForm from "../../UI/registrationForm";
import RegistrationPageLogo from "./additional/RegistrationLogo";
import s from "./registration.module.scss";

const Registration: FC = () => {
  return (
    <main>
      <Header></Header>
      <section className={s.registration}>
        <div className="container">
          <section className={s.registration__content}>
            <RegistrationPageLogo />
            <RegistrationForm />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Registration;
