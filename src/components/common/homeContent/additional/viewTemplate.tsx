import { FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import DateApi from "../../../../api/dateApi";
import { ITask } from "../../../../types/models/ITask";
import CreateTask from "../../../UI/createTask";
import Task from "../../../UI/task";
import s from "./viewTemplate.module.scss";

interface IViewTemplateProps {
  viewTitle: string;
  notCompletedTasks: ITask[];
  completedTasks: ITask[];
  isList: boolean;
}

const ViewTemplate: FC<IViewTemplateProps> = ({
  viewTitle,
  notCompletedTasks,
  completedTasks,
  isList,
}) => {
  const taskListMaker = (taskArray: ITask[] | undefined) => {
    if (taskArray === undefined) return null;

    return taskArray.map((task) => <Task key={task.id} task={task} />);
  };

  return (
    <section className={s.view}>
      <header className={s.view__header}>
        <h1 className={`${s.view__title} textEllipsis`} title={viewTitle}>
          {viewTitle}
        </h1>
        {!isList && <p className={s.view__date}>{DateApi.getToday()}</p>}
      </header>
      <main className={`${s.view__body} ${s.body}`}>
        <section className={s.taskSection}>
          <h2 className={s.body__title}>Предстоит сделать</h2>
          <section className={s.body__tasksWrapper}>
            {taskListMaker(notCompletedTasks)}
            {notCompletedTasks.length >= 1 && isList && <CreateTask />}
            {notCompletedTasks.length < 1 && !isList && (
              <p className={s.body__areaMessage}>
                Чтобы в <strong>`{viewTitle}`</strong> отображались задачи,
                добавьте по крайней мере одну задачу!
              </p>
            )}
          </section>
        </section>
        <section className={s.taskSection}>
          <h2 className={s.body__title}>Выполнено</h2>
          <section className={s.body__tasksWrapper}>
            {taskListMaker(completedTasks)}
            {completedTasks.length < 1 && (
              <p className={s.body__areaMessage}>
                В списке <strong>`{viewTitle}`</strong> нет выполненых задач!
              </p>
            )}
          </section>
        </section>
      </main>
    </section>
  );
};

export default ViewTemplate;
