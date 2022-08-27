import { FC, useEffect, useRef, useState } from "react";
import { useListById } from "../../../hooks/useListById";
import { useMenuPosition } from "../../../hooks/useMenuPosition";
import ListMenu from "./additional/listMenu";
import s from "./list.module.scss";

interface IListProps {
  listId: number;
}

const List: FC<IListProps> = ({ listId }) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const menuPosition = useMenuPosition(dotRef);
  const [isMenuOpened, SetIsMenuOpened] = useState<boolean>(false);
  const { color, listName } = useListById(listId);

  useEffect(() => {
    if (dotRef.current) {
      const dotNode = dotRef.current;
      dotNode.style.backgroundColor = color;
    }
  }, [color, dotRef]);

  return (
    <section className={s.list}>
      <section className={s.list__data}>
        <div ref={dotRef} className={s.list__color}></div>
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

      <ListMenu
        menuPosition={menuPosition}
        isEnabled={isMenuOpened}
        listId={listId}
        setIsEnabled={SetIsMenuOpened}
      />
    </section>
  );
};

export default List;
