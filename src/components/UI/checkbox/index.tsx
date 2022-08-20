import React, { FC, useEffect, useRef, useState } from "react";
import s from "./checkbox.module.scss";

interface ICheckbox {
  color: string;
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkbox: FC<ICheckbox> = ({ color, status, setStatus }) => {
  const chaikaRef = useRef<SVGSVGElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

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
      onClick={() => setStatus(!status)}
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
