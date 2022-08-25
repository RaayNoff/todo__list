import { FC, useEffect, useRef, useState } from "react";
import { useListById } from "../../../hooks/useListById";
import ListMenu from "./additional/listMenu";
import s from "./list.module.scss";

interface IListProps {
  listId: number;
}

const List: FC<IListProps> = ({ listId }) => {
  const colorRef = useRef<HTMLDivElement>(null);
  const [isMenuOpened, SetIsMenuOpened] = useState<boolean>(false);
  const { color, listName } = useListById(listId);

  useEffect(() => {
    if (colorRef.current) {
      colorRef.current.style.backgroundColor = color;
    }
  }, [color]);

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

      <ListMenu
        isEnabled={isMenuOpened}
        listId={listId}
        setIsEnabled={SetIsMenuOpened}
      />
    </section>
  );
};

export default List;
