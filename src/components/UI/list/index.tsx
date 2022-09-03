import React, { FC, useEffect, useRef, useState } from "react";
import { useActions } from "../../../hooks/useActions";
import { useListById } from "../../../hooks/useListById";
import { useMenuPosition } from "../../../hooks/useMenuPosition";
import ListMenu from "./additional/listMenu";
import s from "./list.module.scss";

interface IListProps {
  listId: number;
  clickCallback: (e: React.MouseEvent) => void;
}

const List: FC<IListProps> = ({ listId, clickCallback }) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const menuPosition = useMenuPosition(dotRef);
  const [isMenuOpened, SetIsMenuOpened] = useState<boolean>(false);
  const { color, listName } = useListById(listId);
  const { displayList } = useActions();

  useEffect(() => {
    if (dotRef.current) {
      const dotNode = dotRef.current;
      dotNode.style.background = color;
    }
  }, [color, dotRef]);

  const handleClick = (e: React.MouseEvent) => {
    displayList(listId);
    clickCallback(e);
  };

  return (
    <button className={`${s.list}`} onClick={(e) => handleClick(e)}>
      <section className={s.list__data}>
        <div ref={dotRef} className={s.list__color}></div>
        <header title={listName} className={`${s.list__name} textEllipsis`}>
          {listName}
        </header>
      </section>
      <div
        onClick={(e) => {
          e.stopPropagation();
          SetIsMenuOpened(!isMenuOpened);
        }}
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

      <ListMenu
        menuPosition={menuPosition}
        isEnabled={isMenuOpened}
        listId={listId}
        setIsEnabled={SetIsMenuOpened}
      />
    </button>
  );
};

export default List;
