import React from "react";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import Switcher from "./additional/switcher";
import s from "./homeContent.module.scss";

const HomeContent = () => {
  return (
    <main className={s.homeContent}>
      <div className={MaxWidthContainer.HOME_CONTENT}>
        <section className={s.homeContent__content}>
          <Switcher />
        </section>
      </div>
    </main>
  );
};

export default HomeContent;
