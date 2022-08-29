import React from "react";
import s from "./desriptionIcon.module.scss";

const DescriptionSVG = (): JSX.Element => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={s.icon}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 5H1.5"
        stroke="#757575"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 3H1.5"
        stroke="#757575"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 7H1.5"
        stroke="#757575"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 9H1.5"
        stroke="#757575"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DescriptionSVG;
