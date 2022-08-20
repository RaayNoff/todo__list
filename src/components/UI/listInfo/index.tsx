import React, { FC } from "react";
import { useList } from "../../../hooks/useList";
import { useTask } from "../../../hooks/useTask";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IList } from "../../../types/list";
import Checkbox from "../checkbox";
import HeaderInsert from "../headerInsert";
import AsideListInfo from "./additional/aside";
import s from "./listInfo.module.scss";

interface IListInfoProps {
  listId: number;
  taskId: number;
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListInfo: FC<IListInfoProps> = ({
  listId,
  taskId,
  setStatus,
  status,
}) => {
  const { colors, listName } = useList(listId);
  const { endTime, taskName, description } = useTask(taskId);

  return (
    <section className={s.listInfo}>
      <HeaderInsert>{listName}</HeaderInsert>
      <section className={s.listInfo__content}>
        <section className={s.listInfo__data}>
          <section className={s.task}>
            <Checkbox
              color={colors.color}
              setStatus={setStatus}
              status={status}
            />
            <section className={s.task__info}>
              <p className={s.task__name}>{taskName}</p>
              <section className={s.description}>
                <div className={s.decription__icon}></div>
                <p className={s.decription__text}></p>
              </section>
            </section>
          </section>

          <section className={s.comments}></section>
        </section>
        <AsideListInfo
          listColor={colors.color}
          listName={listName}
          endTime={endTime}
        />
      </section>
    </section>
  );
};

export default ListInfo;
