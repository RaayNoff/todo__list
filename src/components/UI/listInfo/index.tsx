import React, { FC } from "react";
import { useList } from "../../../hooks/useList";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IList } from "../../../types/list";
import HeaderInsert from "../headerInsert";
import s from "./listInfo.module.scss";

interface IListInfoProps {
  listId: string;
  taskId: string;
}

const ListInfo: FC<IListInfoProps> = ({ listId, taskId }) => {
  const { colors, listName } = useList(listId);

  return (
    <section className={s.listInfo}>
      <HeaderInsert>{listName}</HeaderInsert>
    </section>
  );
};

export default ListInfo;
