import React, { Dispatch, FC } from "react";
import { useActions } from "../../../../hooks/useActions";
import { listApi } from "../../../../services/listApi";
import s from "./listMenu.module.scss";

interface IListMenuProps {
  isEnabled: boolean;
  setIsEnabled: Dispatch<React.SetStateAction<boolean>>;
  listId: number;
}

const ListMenu: FC<IListMenuProps> = ({ isEnabled, listId, setIsEnabled }) => {
  const [deleteList, {}] = listApi.useDeleteListMutation();
  const { shareListToggleOn, fetchLists } = useActions();

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
    <section
      className={isEnabled ? `${s.listMenu} ${s.active}` : `${s.listMenu}`}
    >
      <p className={s.listMenu__item}>Редактировать список</p>
      <p className={s.listMenu__item} onClick={(e) => shareListHandler(e)}>
        Поделиться списком
      </p>
      <p className={s.listMenu__item} onClick={(e) => deleteListHandler(e)}>
        Удалить список
      </p>
    </section>
  );
};

export default ListMenu;
