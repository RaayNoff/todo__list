import React, { FC } from "react";
import DateApi from "../../../../api/dateApi";
import { ITask } from "../../../../types/models/ITask";
import Task from "../../../UI/task";
import s from "./viewTemplate.module.scss";

interface IViewTemplateProps {
  viewTitle: string;
  notCompletedTasks?: ITask[];
  completedTasks?: ITask[];
}

const ViewTemplate: FC<IViewTemplateProps> = ({
  viewTitle,
  notCompletedTasks,
  completedTasks,
}) => {
  const taskListMaker = (taskArray: ITask[] | undefined) => {
    if (taskArray === undefined) return null;

    return taskArray.map((task) => <Task key={task.id} task={task} />);
  };

  return (
    <section className={s.view}>
      <header className={s.view__header}>
        <h1 className={s.view__title}>{viewTitle}</h1>
        <p className={s.view__date}>{DateApi.getToday()}</p>
      </header>
      <main className={`${s.view__body} ${s.body}`}>
        <section className={s.taskSection}>
          <h2 className={s.body__title}>Предстоит сделать</h2>
          <section className={s.body__tasksWrapper}>
            {taskListMaker(notCompletedTasks)}
          </section>
        </section>
        <section className={s.taskSection}>
          <h2 className={s.body__title}>Выполнено</h2>
          <section className={s.body__tasksWrapper}>
            {taskListMaker(completedTasks)}
          </section>
        </section>
      </main>
    </section>
  );
};

export default ViewTemplate;
