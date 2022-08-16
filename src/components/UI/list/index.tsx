import React, { FC, LegacyRef, useEffect, useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ListMenu from "./additional/listMenu";
import s from "./list.module.scss";

interface IListProps {
  listName: string;
  listColor: string;
}

const List: FC<IListProps> = ({ listName, listColor }) => {
  const colorRef = useRef<HTMLDivElement>(null);
  const [isMenuOpened, SetIsMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.style.backgroundColor = listColor;
    }
  }, [listColor]);

  return (
    <section className={s.list}>
      <section className={s.list__data}>
        <div ref={colorRef} className={s.list__color}></div>
        <header className={s.list__name}>{listName}</header>
      </section>
      <div
        onClick={() => SetIsMenuOpened(!isMenuOpened)}
        className={
          isMenuOpened
            ? `${s.list__menu} ${s.list__menu_active}`
            : `${s.list__menu}`
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ListMenu isEnabled={isMenuOpened} />
    </section>
  );
};

export default List;
