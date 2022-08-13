import { hover } from "@testing-library/user-event/dist/hover";
import React, { FC } from "react";
import Select from "react-select";
import { Colors } from "../../../types/colors";
import s from "./colorPicker.module.scss";

interface IColorPickerProps {
  onColorClicked: (color: string) => void;
}

const ColorPicker: FC<IColorPickerProps> = ({ onColorClicked }) => {
  return (
    <section className={s.colorPicker}>
      <header className={s.colorPicker__title}>Выберите цвет</header>
      <div className={s.colorPicker__colors}>
        <Select options={Colors.pallete} />
      </div>
    </section>
  );
};

export default ColorPicker;
