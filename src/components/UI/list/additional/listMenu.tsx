import React, { Dispatch, FC } from "react";
import { useActions } from "../../../../hooks/useActions";
import { useMenuPositionRef } from "../../../../hooks/useMenuPositionRef";
import { contentApi } from "../../../../services/contentApi";

interface IListMenuProps {
  isEnabled: boolean;
  setIsEnabled: Dispatch<React.SetStateAction<boolean>>;
  listId: number;
  menuPosition: {
    top: number;
    left: number;
  };
}

const ListMenu: FC<IListMenuProps> = ({
  isEnabled,
  listId,
  setIsEnabled,
  menuPosition,
}) => {
  const menuRef = useMenuPositionRef(menuPosition, 110, 15);
  const [deleteList] = contentApi.useFetchListsDeleteMutation();
  const { listDelete } = useActions();
  const { shareListToggleOn, editListToggleOn } = useActions();

  const deleteListHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEnabled((prev) => !prev);

    listDelete();
    deleteList({ listId: listId });
  };

  const shareListHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    shareListToggleOn(listId);
    setIsEnabled((prev) => !prev);
  };

  const editListHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    editListToggleOn(listId);
    setIsEnabled((prev) => !prev);
  };

  return (
    <div
      onClick={(e) => {
        setIsEnabled((prev) => !prev);
      }}
      className={isEnabled ? "menu-wrapper active" : "menu-wrapper"}
    >
      <menu ref={menuRef} className="menu">
        <p className="menu__item" onClick={(e) => editListHandler(e)}>
          Редактировать список
        </p>
        <p className="menu__item" onClick={(e) => shareListHandler(e)}>
          Поделиться списком
        </p>
        <p className="menu__item" onClick={(e) => deleteListHandler(e)}>
          Удалить список
        </p>
      </menu>
    </div>
  );
};

export default ListMenu;
