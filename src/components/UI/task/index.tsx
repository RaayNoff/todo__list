import { FC } from "react";
import { ITask } from "../../../types/task";
import s from "./task.module.scss";

interface TaskProps {
  task: ITask;
}

const Task: FC<TaskProps> = ({ task }) => {
  return (
    <section className={s.task}>
      <div className={s.task__checkbox}></div>

      <section className={s.task__data}>
        <p className={s.task__name}>{task.taskName}</p>
        <p className={s.task__description}> {task.description} </p>
        <section className={s.task__footer}>
          <section className={s.task__date}>
            <div></div>
            <p>{task.endTime} </p>
          </section>
          <p className={s.task__from}>Задачи с Дмитрием</p>
        </section>
      </section>
    </section>
  );
};

export default Task;
