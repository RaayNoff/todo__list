import { FC, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { contentApi } from "../../../services/contentApi";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import Header from "../../common/header";
import HomeContent from "../../common/homeContent";
import Sidebar from "../../common/sidebar";
import CreateList from "../../modals/createList";
import ShareList from "../../modals/shareList";
import TaskInfo from "../../modals/taskInfo";
import s from "./home.module.scss";

const Home: FC = () => {
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState<boolean>(true);
  const { data: listss } = contentApi.useFetchAllListsQuery(0);
  const { data: tasks } = contentApi.useFetchAllTasksQuery(0);
  const { fetchLists } = useActions();
  const { error, lists, loading } = useTypedSelector((state) => state.list);

  const toggleSidebar = () => {
    setIsSidebarDisplayed(!isSidebarDisplayed);
  };

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
      <TaskInfo />
    </main>
  );
};

export default Home;
