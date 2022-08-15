import React, { FC } from "react";
import HeaderInsert from "../headerInsert";
import s from "./listInfo.module.scss";

interface IListInfoProps {
  listName: string;
  deadline: string;
  taskColor: string;
  taskTitle: string;
  taskDecription: string;
}

const ListInfo: FC = () => {
  return (
    <section className={s.listInfo}>
      <HeaderInsert></HeaderInsert>
    </section>
  );
};

export default ListInfo;
