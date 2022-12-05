import React, { FC } from "react";

import { useActions } from "../../../hooks/useActions";
import { useFilteredLists } from "../../../hooks/useFiltredLists";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { contentApi } from "../../../services/contentApi";
import { LoaderType } from "../../../types/enums/LoaderType";
import { TimeFrameTypes } from "../../../types/enums/TimeFrame";
import { IList } from "../../../types/models/IList";
import Grouper from "../../UI/grouper";
import List from "../../UI/list";
import Loader from "../../UI/loader";
import TimeFrame from "../../UI/timeFrame";
import ListUtil from "../../utils/ListUtil";

import s from "./sidebar.module.scss";

const Sidebar: FC = () => {
  const { status: isEnabled } = useTypedSelector((state) => state.sidebar);
  const { sidebarToggle } = useActions();
  const { isLoading } = contentApi.useFetchAllListsQuery(0);
  const { notSharedLists, sharedLists } = useFilteredLists();

  const generateGrouperContent = (listArray: IList[], emptyMessage: string) => {
    return isLoading ? (
      <Loader isActive={isLoading} loaderType={LoaderType.LIST} />
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
    <section className={s.sidebarWrapper}>
      <aside
        className={
          isEnabled ? `${s.sidebar} ${s.sidebar__enabled}` : `${s.sidebar}`
        }
      >
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
              "Персональные списки не были найдены.",
            )}
          </Grouper>
          <Grouper groupName="Общие" isAddActive={false}>
            {generateGrouperContent(
              sharedLists,
              "Общие списки не были найдены.",
            )}
          </Grouper>
        </section>
      </aside>
      <div
        className={
          isEnabled
            ? `${s.background} ${s.background__enabled}`
            : `${s.background}`
        }
        onClick={() => sidebarToggle(false)}
      ></div>
    </section>
  );
};

export default Sidebar;
