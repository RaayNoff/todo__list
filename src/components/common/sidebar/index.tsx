import React, { FC, useState } from "react";
import { useFilteredLists } from "../../../hooks/useFiltredLists";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { LoaderType } from "../../../types/enums/LoaderType";
import { TimeFrameTypes } from "../../../types/enums/TimeFrame";
import { IList } from "../../../types/models/IList";
import Grouper from "../../UI/grouper";
import List from "../../UI/list";
import Loader from "../../UI/loader";
import TimeFrame from "../../UI/timeFrame";
import ListUtil from "../../utils/ListUtil";
import s from "./sidebar.module.scss";

interface ISidebarProps {
  isEnabled: boolean;
}

const Sidebar: FC<ISidebarProps> = ({ isEnabled }) => {
  const { loading } = useTypedSelector((state) => state.list);
  const { notSharedLists, sharedLists } = useFilteredLists();

  const generateGrouperContent = (listArray: IList[], emptyMessage: string) => {
    return loading ? (
      <Loader isActive={loading} loaderType={LoaderType.LIST} />
    ) : (
      <>
        <ListUtil
          items={listArray}
          renderItem={(list: IList) => (
            <List
              clickCallback={elementGeneratorClick}
              key={list.id}
              listId={list.id}
            />
          )}
        />
        {listArray.length < 1 && (
          <p className={s.sidebar__empty}>{emptyMessage}</p>
        )}
      </>
    );
  };

  const elementGeneratorClick = (e: React.MouseEvent) => {
    const prev = document.querySelector(".elementContentGenerator");
    prev?.classList.remove("elementContentGenerator");

    e.currentTarget.classList.add("elementContentGenerator");
  };

  return (
    <aside
      className={
        isEnabled ? `${s.sidebar} ${s.sidebar__enabled}` : `${s.sidebar}`
      }
    >
      <div className={s._container}>
        <section className={s.sidebar__timeFrames}>
          <TimeFrame
            frameType={TimeFrameTypes.TODAY}
            clickCallback={elementGeneratorClick}
            defaultGenerator={true}
          />
          <TimeFrame
            frameType={TimeFrameTypes.UPCOMING}
            clickCallback={elementGeneratorClick}
          />
        </section>

        <section className={s.sidebar__groups}>
          <Grouper groupName="Списки">
            {generateGrouperContent(
              notSharedLists,
              "Чтобы начать работу со списками нажмите + сверху."
            )}
          </Grouper>
          <Grouper groupName="Общие" isAddActive={false}>
            {generateGrouperContent(
              sharedLists,
              "Общие списки не были найдены."
            )}
          </Grouper>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
