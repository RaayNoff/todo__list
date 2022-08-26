import React, { FC } from "react";
import DateApi from "../../../../api/dateApi";
import { ITask } from "../../../../types/models/ITask";
import Task from "../../../UI/task";
import s from "./viewTemplate.module.scss";

interface IViewTemplateProps {
  viewTitle: string;
  todayTasks?: ITask[];
  completedTasks?: ITask[];
}

const ViewTemplate: FC<IViewTemplateProps> = ({
  viewTitle,
  todayTasks,
  completedTasks,
}) => {
  return (
    <section className={s.view}>
      <header className={s.view__header}>
        <h1 className={s.view__title}>{viewTitle}</h1>
      </header>
      <main className={`${s.view__body} ${s.body}`}>
        <section className={s.taskSection}>
          <h2 className={s.body__title}>Предстоит сделать</h2>
          <section className={s.body__tasksWrapper}>
            {todayTasks?.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </section>
        </section>
        <section className={s.taskSection}>
          <h2 className={s.body__title}>Выполнено</h2>
          <section className={s.body__tasksWrapper}>
            {completedTasks?.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </section>
        </section>
      </main>
    </section>
  );
};

export default ViewTemplate;
