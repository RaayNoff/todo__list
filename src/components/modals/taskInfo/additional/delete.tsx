import React, { FC } from "react";
import { useActions } from "../../../../hooks/useActions";
import { contentApi } from "../../../../services/contentApi";
import s from "./delete.module.scss";

interface IDeleteProps {
  taskId: number;
}

const Delete: FC<IDeleteProps> = ({ taskId }) => {
  const [deleteTask] = contentApi.useFetchTaskDeleteMutation();
  const { taskInfoToggleOff } = useActions();

  const clickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteTask({ taskId });
    taskInfoToggleOff();
  };

  return (
    <button
      className={s.delete}
      onClick={(e) => clickHandler(e)}
      title={"Удалить"}
    >
      <svg
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20px"
        height="20px"
      >
        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
      </svg>
    </button>
  );
};

export default Delete;
