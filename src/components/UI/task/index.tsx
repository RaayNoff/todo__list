import { FC, useState } from "react";
import { useListById } from "../../../hooks/useListById";
import { useTaskByListId } from "../../../hooks/useTaskByListId";
import { ITask } from "../../../types/models/ITask";
import Checkbox from "../checkbox";
import Endtime from "../endtime";
import s from "./task.module.scss";

interface TaskProps {
  task: ITask;
}

const Task: FC<TaskProps> = ({ task }) => {
  const [status, setStatus] = useState(false);
  const listId = useTaskByListId(task.id);
  const { color } = useListById(listId);

  return (
    <section className={s.task}>
      <Checkbox color={color} status={status} setStatus={setStatus} />

      <section className={s.task__data}>
        <p className={s.task__name}>{task.taskName}</p>
        <p className={s.task__description}> {task.description} </p>
        <section className={s.task__footer}>
          <section className={s.task__date}>
            <Endtime timestamp={task.endTime} />
          </section>
          <p className={s.task__from}>Задачи с Дмитрием</p>
        </section>
      </section>
    </section>
  );
};

export default Task;
