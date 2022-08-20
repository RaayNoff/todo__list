import React, { FC, useEffect, useRef } from "react";
import { IColor } from "../../../../types/color";
import Endtime from "../../endtime";
import s from "./aside.module.scss";

interface IAsideListInfo {
  listName: string;
  endTime: string;
  listColor: string;
}

const AsideListInfo: FC<IAsideListInfo> = ({
  endTime,
  listName,
  listColor,
}) => {
  const listColorElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listColorElement.current)
      listColorElement.current.style.backgroundColor = listColor;
  }, [listColor]);

  return (
    <aside className={s.sidebar}>
      <section className={s.sidebar__list}>
        <header className={s.sidebar__header}>Список</header>
        <section className={s.sidebar__data}>
          <div ref={listColorElement}></div>
          <p className={s.sidebar__listName}>{listName}</p>
        </section>
      </section>
      <section className={s.sidebar__endtime}>
        <header className={s.sidebar__header}>Срок выполнения</header>
        <Endtime date={endTime} />
      </section>
    </aside>
  );
};

export default AsideListInfo;
