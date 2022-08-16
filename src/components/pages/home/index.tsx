import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { MaxWidthContainer } from "../../../types/maxWidthContainer";
import Header from "../../common/header";
import Sidebar from "../../common/sidebar";
import s from "./home.module.scss";

const Home: FC = () => {
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState<boolean>(false);
  const { fetchLists } = useActions();
  const { error, lists, loading } = useTypedSelector((state) => state.lists);

  const toggleSidebar = () => {
    setIsSidebarDisplayed(!isSidebarDisplayed);
  };
  useEffect(() => {
    fetchLists("");
  }, []);

  console.log(lists);
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
