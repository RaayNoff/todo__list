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
  const menuRef = useMenuPositionRef(menuPosition, 150, 15);
  const [deleteList, {}] = contentApi.useFetchListsDeleteMutation();
  const { shareListToggleOn, fetchLists } = useActions();

  const deleteListHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEnabled((prev) => !prev);
    deleteList({ listId });
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
      className={isEnabled ? "menu-wrapper active" : "menu-wrapper"}
    >
      <section ref={menuRef} className="menu">
        <p className="menu__item" onClick={(e) => shareListHandler(e)}>
          Поделиться списком
        </p>
        <p className="menu__item" onClick={(e) => deleteListHandler(e)}>
          Удалить список
        </p>
      </section>
    </div>
  );
};

export default ListMenu;
