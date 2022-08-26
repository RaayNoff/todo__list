import { FC, useEffect, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import Header from "../../common/header";
import HomeContent from "../../common/homeContent";
import Sidebar from "../../common/sidebar";
import CreateList from "../../modals/createList";
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
      />
      <section className={s.home}>
        <Sidebar isEnabled={isSidebarDisplayed} />
        <HomeContent />
      </section>
      <CreateList />
      <ShareList />
    </main>
  );
};

export default Home;
