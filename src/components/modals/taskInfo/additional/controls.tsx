import React, { FC } from "react";
import s from "./controls.module.scss";
import controlsSVGSelector, { ControlsType } from "./controlsSVGSelector";

interface IControlsProps {
  onSave: (e: React.MouseEvent) => void;
  onCancel: (e: React.MouseEvent) => void;
}

const Controls: FC<IControlsProps> = ({ onCancel, onSave }) => {
  return (
    <section className={s.controls}>
      <button className={s.controls__button} onClick={(e) => onSave(e)}>
        {controlsSVGSelector(ControlsType.DONE)}
      </button>
      <button className={s.controls__button} onClick={(e) => onCancel(e)}>
        {controlsSVGSelector(ControlsType.CLOSE)}
      </button>
    </section>
  );
};

export default Controls;
