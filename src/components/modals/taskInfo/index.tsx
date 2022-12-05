import React, { FC, useEffect, useRef } from "react";

import { useActions } from "../../../hooks/useActions";
import { useListByTaskId } from "../../../hooks/useListByTaskId";
import { useTaskById } from "../../../hooks/useTaskById";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Checkbox from "../../UI/checkbox";
import Commentary from "../../UI/commentary";
import CommentaryArea from "../../UI/commentaryArea";
import Endtime from "../../UI/endtime";
import Grouper from "../../UI/grouper";
import HeaderInsert from "../../UI/headerInsert";

import AsidetaskInfo from "./additional/aside";
import Delete from "./additional/delete";
import DescriptionSVG from "./additional/descriptionSVG";
import TextEditor, { editorType } from "./additional/textEditor";
import s from "./taskInfo.module.scss";
import style from "./additional/aside.module.scss";

const TaskInfo: FC = () => {
  const {
    taskInfo: { status, currentTaskId },
  } = useTypedSelector((state) => state.popups);
  const { listName, color } = useListByTaskId(currentTaskId);
  const { taskName, description, comments, endTime } =
    useTaskById(currentTaskId);

  useEffect(() => {
    if (listColorElement.current)
      listColorElement.current.style.backgroundColor = color;
  }, [color]);

  const listColorElement = useRef<HTMLDivElement>(null);

  const { taskInfoToggleOff } = useActions();

  const cancelHandler = (e: React.MouseEvent) => {
    taskInfoToggleOff();
  };

  return (
    <div
      className={status ? "popup enabled" : "popup"}
      onClick={(e) => cancelHandler(e)}
    >
      <section onClick={(e) => e.stopPropagation()} className={s.taskInfo}>
        <HeaderInsert>{listName}</HeaderInsert>
        <section className={s.taskInfo__content}>
          <section className={s.taskInfo__data}>
            <section className={s.task}>
              <Checkbox taskId={currentTaskId} />
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
                <Delete taskId={currentTaskId} />
              </section>
            </section>

            <section className={s.taskInfo__smallInfo}>
              <section className={style.sidebar__section}>
                <header className={style.sidebar__header}>Список</header>
                <section className={style.sidebar__data}>
                  <div ref={listColorElement}></div>
                  <p
                    className={`${style.sidebar__listName} textEllipsis`}
                    title={listName}
                  >
                    {listName}
                  </p>
                </section>
              </section>
              <section className={style.sidebar__section}>
                <header className={style.sidebar__header}>
                  Срок выполнения
                </header>
                <Endtime timestamp={endTime} />
              </section>
            </section>

            <Grouper groupName="Комментарии" isAddActive={false}>
              {comments.length >= 1 ? (
                comments.map((c) => (
                  <Commentary
                    content={c.content}
                    email={c.email}
                    key={c.id}
                    timestamp={c.timestamp}
                  />
                ))
              ) : (
                <p className={s.taskInfo__nocomments}>
                  Оставить комментарий - это отличный способ дополнить задачу
                  или обсудить её с другими пользователями!
                </p>
              )}
              <CommentaryArea taskId={currentTaskId} />
            </Grouper>
          </section>
          <AsidetaskInfo
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
