import React, { Dispatch, FC, useEffect, useRef } from "react";
import { useActions } from "../../../../hooks/useActions";
import { listApi } from "../../../../services/listApi";
import s from "./listMenu.module.scss";

interface IListMenuProps {
  isEnabled: boolean;
  setIsEnabled: Dispatch<React.SetStateAction<boolean>>;
  listId: number;
  menuPosition: {
    offsetLeft: number;
    offsetTop: number;
  };
}

const ListMenu: FC<IListMenuProps> = ({
  isEnabled,
  listId,
  setIsEnabled,
  menuPosition,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [deleteList, {}] = listApi.useDeleteListMutation();
  const { shareListToggleOn, fetchLists } = useActions();

  useEffect(() => {
    if (menuRef.current) {
      const menuNode = menuRef.current;
      menuNode.style.top = `${menuPosition.offsetTop.toString()}px`;
      menuNode.style.left = `${menuPosition.offsetLeft.toString()}px`;
    }
  }, [menuRef, menuPosition]);

  const deleteListHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEnabled((prev) => !prev);
    deleteList(listId);
    fetchLists();
  };

  const shareListHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    shareListToggleOn(listId);
    setIsEnabled((prev) => !prev);
  };

  return (
    <div
      onClick={(e) => {
        setIsEnabled((prev) => !prev);
      }}
      className={isEnabled ? `${s.wrapper} ${s.active}` : `${s.wrapper}`}
    >
      <section ref={menuRef} className={s.listMenu}>
        <p className={s.listMenu__item} onClick={(e) => shareListHandler(e)}>
          Поделиться списком
        </p>
        <p className={s.listMenu__item} onClick={(e) => deleteListHandler(e)}>
          Удалить список
        </p>
      </section>
    </div>
  );
};

export default ListMenu;
