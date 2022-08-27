import React, { FC, useEffect, useRef } from "react";
import { useListByTaskId } from "../../../hooks/useListByTaskId";
import { useTaskById } from "../../../hooks/useTaskById";
import { listApi } from "../../../services/listApi";
import { taskApi } from "../../../services/taskApi";
import s from "./checkbox.module.scss";

interface ICheckbox {
  taskId: number;
}

const Checkbox: FC<ICheckbox> = ({ taskId }) => {
  const chaikaRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const { color } = useListByTaskId(taskId);
  const { status } = useTaskById(taskId);
  const [changeStatus, {}] = taskApi.useChangeStatusMutation();

  const handleSetStatus = (e: React.MouseEvent) => {
    e.stopPropagation();

    changeStatus({ id: taskId, status: !status });
  };

  useEffect(() => {
    if (chaikaRef.current && circleRef.current) {
      chaikaRef.current.style.stroke = color;
      circleRef.current.style.borderColor = color;
    }
  }, [color]);

  return (
    <div
      className={s.checkbox}
      ref={circleRef}
      onClick={(e) => handleSetStatus(e)}
    >
      <svg
        className={status ? `${s.display}` : `${s.nodisplay}`}
        ref={chaikaRef}
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.33329 0.5L2.74996 5.08333L0.666626 3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Checkbox;
