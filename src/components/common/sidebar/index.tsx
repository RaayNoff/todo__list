import React, { FC } from "react";
import { TimeFrameTypes } from "../../../types/enums/TimeFrame";
import Grouper from "../../UI/grouper";
import List from "../../UI/list";
import TimeFrame from "../../UI/timeFrame";
import s from "./sidebar.module.scss";

interface ISidebarProps {
  isEnabled: boolean;
}

const Sidebar: FC<ISidebarProps> = ({ isEnabled }) => {
  return (
    <aside
      className={
        isEnabled ? `${s.sidebar} ${s.sidebar__enabled}` : `${s.sidebar}`
      }
    >
      <div className={s._container}>
        <section className={s.sidebar__timeFrames}>
          <TimeFrame frameType={TimeFrameTypes.TODAY}></TimeFrame>
          <TimeFrame frameType={TimeFrameTypes.UPCOMING}></TimeFrame>
        </section>

        <section className={s.sidebar__groups}>
          <Grouper groupName="Списки">
            <List listColor="#b736f3" listName="Тестовый список" />
          </Grouper>
          <Grouper groupName="Общие">
            <List listColor="#553fdb" listName="Задачи с Дмитрием" />
          </Grouper>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
