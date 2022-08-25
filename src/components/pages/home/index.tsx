import { FC, useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import Header from "../../common/header";
import MainContent from "../../common/mainContent";
import Sidebar from "../../common/sidebar";
import CreateList from "../../modals/createList";
import ListInfo from "../../modals/listInfo";
import ShareList from "../../modals/shareList";
import s from "./home.module.scss";

const Home: FC = () => {
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState<boolean>(true);

  const { fetchLists } = useActions();
  const { error, lists, loading } = useTypedSelector((state) => state.list);

  const toggleSidebar = () => {
    setIsSidebarDisplayed(!isSidebarDisplayed);
  };
  useEffect(() => {
    fetchLists();
  }, []);

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
          <MainContent />
        </div>
      </section>
      <CreateList />
      <ShareList />
    </main>
  );
};

export default Home;
