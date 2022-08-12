import React, { FC } from "react";
import HeaderInsert from "../headerInsert";
import s from "./createList.module.scss";

const CreateList: FC = () => {
  return (
    <form className={s.createList}>
      <HeaderInsert>Добавить список</HeaderInsert>
      <main className={s.createList__content}></main>
    </form>
  );
};

export default CreateList;
