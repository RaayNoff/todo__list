import { hover } from "@testing-library/user-event/dist/hover";
import React, { FC, SyntheticEvent, useState } from "react";
import s from "./colorPicker.module.scss";

interface IColorPickerProps {
  onColorClicked: (color: string) => void;
}

const ColorPicker: FC<IColorPickerProps> = ({ onColorClicked }) => {
  return (
    <section className={s.colorPicker}>
      <header className={s.colorPicker__title}>Выберите цвет</header>
      <div className={s.colorPicker__colors}></div>
    </section>
  );
};

export default ColorPicker;
