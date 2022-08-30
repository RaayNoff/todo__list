import React, { FC } from "react";
import { useActions } from "../../../hooks/useActions";
import { useListByTaskId } from "../../../hooks/useListByTaskId";
import { useTaskById } from "../../../hooks/useTaskById";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Checkbox from "../../UI/checkbox";
import Commentary from "../../UI/commentary";
import CommentaryArea from "../../UI/commentaryArea";
import Grouper from "../../UI/grouper";
import HeaderInsert from "../../UI/headerInsert";
import AsideListInfo from "./additional/aside";
import Delete from "./additional/delete";
import DescriptionSVG from "./additional/descriptionSVG";
import TextEditor, { editorType } from "./additional/textEditor";
import s from "./taskInfo.module.scss";

const TaskInfo: FC = () => {
  const { taskInfo } = useTypedSelector((state) => state.popups);
  const { listName, color } = useListByTaskId(taskInfo.currentTaskId);
  const { taskName, description, comments, endTime } = useTaskById(
    taskInfo.currentTaskId
  );

  const { taskInfoToggleOff } = useActions();

  const cancelHandler = (e: React.MouseEvent) => {
    taskInfoToggleOff();
  };

  return (
    <div
      className={taskInfo.status ? "popup enabled" : "popup"}
      onClick={(e) => cancelHandler(e)}
    >
      <section onClick={(e) => e.stopPropagation()} className={s.listInfo}>
        <HeaderInsert>{listName}</HeaderInsert>
        <section className={s.listInfo__content}>
          <section className={s.listInfo__data}>
            <section className={s.task}>
              <section className={s.task__actions}>
                <Checkbox taskId={taskInfo.currentTaskId} />
                <Delete taskId={taskInfo.currentTaskId} />
              </section>
              <section className={s.task__info}>
                <TextEditor
                  defaultValue={taskName}
                  editType={editorType.INPUT}
                />
                <section className={s.description}>
                  {DescriptionSVG()}
                  <TextEditor
                    defaultValue={description}
                    editType={editorType.TEXTAREA}
                  />
                </section>
              </section>
            </section>

            <Grouper groupName="Комментарии" isAddActive={false}>
              {comments.length >= 1 ? (
                comments.map((c) => (
                  <Commentary
                    content={c.content}
                    email={c.email}
                    key={c.email}
                    timestamp={c.timestamp}
                  />
                ))
              ) : (
                <p className={s.listInfo__nocomments}>
                  Оставить комментарий - это отличный способ дополнить задачу
                  или обсудить её с другими пользователями!
                </p>
              )}
              <CommentaryArea taskId={taskInfo.currentTaskId} />
            </Grouper>
          </section>
          <AsideListInfo
            listColor={color}
            listName={listName}
            timestamp={endTime}
          />
        </section>
      </section>
    </div>
  );
};

export default TaskInfo;
