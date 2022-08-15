import React, { FC, useState } from "react";
import { MaxWidthContainer } from "../../../types/maxWidthContainer";
import Header from "../../common/header";
import Sidebar from "../../common/sidebar";
import s from "./home.module.scss";

const Home: FC = () => {
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarDisplayed(!isSidebarDisplayed);
  };

  return (
    <main>
      <Header
        iconDisplayed={true}
        burgerCallback={toggleSidebar}
        maxWidthContainer={MaxWidthContainer.AUTHORIZED}
      ></Header>
      <section className={s.home}>
        <Sidebar isEnabled={isSidebarDisplayed}></Sidebar>
        <div className={MaxWidthContainer.AUTHORIZED}>
          <section className={s.home__content}></section>
        </div>
      </section>
    </main>
  );
};

export default Home;
