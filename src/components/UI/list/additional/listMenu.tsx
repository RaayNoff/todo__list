import React, { FC } from "react";
import s from "./listMenu.module.scss";

interface IListMenuProps {
  isEnabled: boolean;
}

const ListMenu: FC<IListMenuProps> = ({ isEnabled }) => {
  return (
    <section className={isEnabled ? `${s.listMenu__active}` : `${s.listMenu}`}>
      <p className={s.listMenu__item}>Редактировать список</p>
      <p className={s.listMenu__item}>Поделиться списком</p>
      <p className={s.listMenu__item}>Удалить список</p>
    </section>
  );
};

export default ListMenu;
