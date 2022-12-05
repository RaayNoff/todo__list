import React, { FC, useState } from "react";

import DateApi from "../../../api/dateApi";
import { useActions } from "../../../hooks/useActions";
import { useListById } from "../../../hooks/useListById";
import { useListByTaskId } from "../../../hooks/useListByTaskId";
import { ITask } from "../../../types/models/ITask";
import Checkbox from "../checkbox";
import Endtime from "../endtime";

import s from "./task.module.scss";

interface TaskProps {
  task: ITask;
}

const Task: FC<TaskProps> = ({ task }) => {
  const { id: listId } = useListByTaskId(task.id);
  const [isExpired] = useState(DateApi.isExpired(task.endTime));
  const { listName } = useListById(listId);
  const { taskInfoToggleOn } = useActions();

  const displayInfoHandler = (e: React.MouseEvent) => {
    taskInfoToggleOn(task.id);
  };

  return (
    <article className={s.task}>
      <Checkbox taskId={task.id} />

      <section onClick={(e) => displayInfoHandler(e)} className={s.task__data}>
        <header className={s.task__head}>
          <p className={`${s.task__name} textEllipsis`} title={task.taskName}>
            {task.taskName}
          </p>
          {isExpired && !task.status && <p className={s.expired}>Просрочено</p>}
        </header>

        <p className={`${s.task__description} textEllipsis`}>
          {task.description}
        </p>

        <section className={s.task__footer}>
          <section className={s.task__date}>
            <Endtime timestamp={task.endTime} />
          </section>

          <p className={`${s.task__from} textEllipsis`} title={listName}>
            {listName}
          </p>
        </section>
      </section>
    </article>
  );
};

export default Task;
