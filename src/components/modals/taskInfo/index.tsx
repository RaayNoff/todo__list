import React, { FC } from "react";
import { useListById } from "../../../hooks/useListById";
import { useTaskById } from "../../../hooks/useTaskById";
import Checkbox from "../../UI/checkbox";
import Commentary from "../../UI/commentary";
import CommentaryArea from "../../UI/commentaryArea";
import Grouper from "../../UI/grouper";
import HeaderInsert from "../../UI/headerInsert";
import AsideListInfo from "./additional/aside";
import DescriptionSVG from "./additional/descriptionSVG";
import s from "./listInfo.module.scss";

interface ITaskInfoProps {
  listId: number;
  taskId: number;
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskInfo: FC<ITaskInfoProps> = ({
  listId,
  taskId,
  setStatus,
  status,
}) => {
  const { color, listName } = useListById(listId);
  const { endTime, taskName, description, comments } = useTaskById(taskId);

  return (
    <section className={s.listInfo}>
      <HeaderInsert>{listName}</HeaderInsert>
      <section className={s.listInfo__content}>
        <section className={s.listInfo__data}>
          <section className={s.task}>
            <Checkbox color={color} setStatus={setStatus} status={status} />
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
          listColor={color}
          listName={listName}
          timestamp={endTime}
        />
      </section>
    </section>
  );
};

export default TaskInfo;
