import { FC, useState } from "react";
import { contentApi } from "../../../services/contentApi";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import Header from "../../common/header";
import HomeContent from "../../common/homeContent";
import Sidebar from "../../common/sidebar";
import CreateList from "../../modals/createList";
import EditList from "../../modals/editList";
import ShareList from "../../modals/shareList";
import TaskInfo from "../../modals/taskInfo";
import s from "./home.module.scss";

const Home: FC = () => {
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState<boolean>(true);
  const {} = contentApi.useFetchAllListsQuery(0, {
    pollingInterval: 60000,
  });
  const {} = contentApi.useFetchAllTasksQuery(0, {
    pollingInterval: 30000,
  });

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
      <EditList />
    </main>
  );
};

export default Home;
