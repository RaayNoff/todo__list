import React, { FC } from "react";
import { useActions } from "../../../../hooks/useActions";
import { contentApi } from "../../../../services/contentApi";
import s from "./delete.module.scss";

interface IDeleteProps {
  taskId: number;
}

const Delete: FC<IDeleteProps> = ({ taskId }) => {
  const [deleteTask] = contentApi.useFetchTaskDeleteMutation();
  const { setLastDeletedTask } = useActions();
  const { taskInfoToggleOff } = useActions();

  const clickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    taskInfoToggleOff();
    setLastDeletedTask(taskId);
    deleteTask({ taskId: taskId });
  };

  return (
    <button
      className={s.delete}
      onClick={(e) => clickHandler(e)}
      title={"Удалить"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={s.delete__icon}
      >
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        <line x1="10" y1="11" x2="10" y2="17"></line>
        <line x1="14" y1="11" x2="14" y2="17"></line>
      </svg>
      <span className={s.delete__message}>Удалить задачу</span>
    </button>
  );
};

export default Delete;
