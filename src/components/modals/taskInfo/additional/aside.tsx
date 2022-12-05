import { FC, useEffect, useRef } from "react";

import Endtime from "../../../UI/endtime";

import s from "./aside.module.scss";

interface IAsideListInfo {
  listName: string;
  timestamp: number;
  listColor: string;
}

const AsideListInfo: FC<IAsideListInfo> = ({
  timestamp,
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
      <section className={s.sidebar__section}>
        <header className={s.sidebar__header}>Список</header>
        <section className={s.sidebar__data}>
          <div ref={listColorElement}></div>
          <p className={`${s.sidebar__listName} textEllipsis`} title={listName}>
            {listName}
          </p>
        </section>
      </section>
      <section className={s.sidebar__section}>
        <header className={s.sidebar__header}>Срок выполнения</header>
        <Endtime timestamp={timestamp} />
      </section>
    </aside>
  );
};

export default AsideListInfo;
