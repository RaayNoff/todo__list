import { FC, useState } from "react";
import { useList } from "../../../hooks/useList";
import { useListId } from "../../../hooks/useListId";
import { ITask } from "../../../types/models/ITask";
import Checkbox from "../checkbox";
import Endtime from "../endtime";
import s from "./task.module.scss";

interface TaskProps {
  task: ITask;
}

const Task: FC<TaskProps> = ({ task }) => {
  const [status, setStatus] = useState(false);
  const listId = useListId(task.id);
  const { colors } = useList(listId);

  return (
    <section className={s.task}>
      <Checkbox color={colors.color} status={status} setStatus={setStatus} />

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
