import React, { FC } from "react";
import { useList } from "../../../hooks/useList";
import { useTask } from "../../../hooks/useTask";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IList } from "../../../types/list";
import HeaderInsert from "../headerInsert";
import AsideListInfo from "./additional/aside";
import s from "./listInfo.module.scss";

interface IListInfoProps {
  listId: number;
  taskId: number;
}

const ListInfo: FC<IListInfoProps> = ({ listId, taskId }) => {
  const { colors, listName } = useList(listId);
  const { endTime } = useTask(taskId);

  return (
    <section className={s.listInfo}>
      <HeaderInsert>{listName}</HeaderInsert>
      <section className={s.listInfo__content}>
        <section className={s.listInfo__data}></section>
        <AsideListInfo
          listColor={colors.color}
          listName={listName}
          endTime={endTime}
        />
      </section>
    </section>
  );
};

export default ListInfo;
