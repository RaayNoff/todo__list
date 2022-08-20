import React, { FC } from "react";
import { useList } from "../../../hooks/useList";
import { useTask } from "../../../hooks/useTask";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IList } from "../../../types/list";
import Checkbox from "../checkbox";
import Commentary from "../commentary";
import CommentaryArea from "../commentaryArea";
import Grouper from "../grouper";
import HeaderInsert from "../headerInsert";
import AsideListInfo from "./additional/aside";
import DescriptionSVG from "./additional/descriptionSVG";
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
  const { endTime, taskName, description, comments } = useTask(taskId);

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
                {DescriptionSVG()}
                <p className={s.description__text}>{description}</p>
              </section>
            </section>
          </section>

          <Grouper groupName="Комментарии" isAddActive={false}>
            {comments.length >= 1 ? (
              comments.map((c) => (
                <Commentary
                  content={c.content}
                  email={c.userEmail}
                  key={c.userEmail}
                  timestamp={c.timestamp}
                />
              ))
            ) : (
              <p className={s.listInfo__nocomments}>
                У этой задачи нет комментариев.
              </p>
            )}
          </Grouper>

          <CommentaryArea taskId={taskId} />
        </section>
        <AsideListInfo
          listColor={colors.color}
          listName={listName}
          timestamp={endTime}
        />
      </section>
    </section>
  );
};

export default ListInfo;
