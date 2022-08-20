import { FC } from "react";
import { ITask } from "../../../types/task";
import List from "../../utils/List";
import Task from "../../UI/task";
import s from "./mainContent.module.scss";

const tasks = [
  {
    id: 1,
    taskName: "Сделать что-то",
    endTime: 1660997596,
    description: "string",
    status: true,
    comments: [],
  },
  {
    id: 2,
    taskName: "Сходить куда-то",
    endTime: 1660997596,
    description: "очень быстро",
    status: false,
    comments: [],
  },
];

const MainContent: FC = () => {
  return (
    <div className={s.main}>
      <div className={s.main__top}>
        <div className={s.leftside}>
          <span className={s.title}> Сегодня </span>
          <span className={s.smtext}> 31 июль </span>
        </div>
        <div className={s.rightside}>
          <span className={s.smtext}> Поделиться </span>
        </div>
      </div>
      <div className={s.main__center}>
        <p className={s.subtitle}> Предстоит сделать </p>
        <List
          items={tasks}
          renderItem={(task: ITask) => <Task task={task} key={task.id} />}
        />
      </div>
    </div>
  );
};

export default MainContent;
