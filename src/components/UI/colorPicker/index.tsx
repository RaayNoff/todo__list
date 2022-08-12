import { hover } from "@testing-library/user-event/dist/hover";
import React, { FC, SyntheticEvent, useState } from "react";
import s from "./colorPicker.module.scss";

interface IColorPickerProps {
  onColorClicked: (color: string) => void;
}

const palette: { hex: string; name: string }[] = [
  { hex: "#8B8B8B", name: "Аспидно-серый" },
  { hex: "#daa520", name: "Золотисто-березовый" },
  { hex: "#78DBE2", name: "Аквамариновый Крайола" },
  { hex: "#FF2400", name: "Алый" },
];

const ColorPicker: FC<IColorPickerProps> = ({ onColorClicked }) => {
  const [prevSelectedColor, setPrevSelectedColor] = useState<HTMLElement>();

  return (
    <section className={s.colorPicker}>
      <header className={s.colorPicker__title}>Цвет</header>
      <div className={s.colorPicker__colors}>
        {palette.map((c) => (
          <section
            key={c.hex}
            className={s.exactColor}
            onClick={(e) => {
              prevSelectedColor?.classList.remove(s.selectedColor);
              e.currentTarget.classList.toggle(s.selectedColor);
              setPrevSelectedColor(e.currentTarget);

              onColorClicked(c.hex);
            }}
          >
            <div
              className={s.exactColor__dot}
              style={{ background: c.hex }}
            ></div>
            <span className={s.exactColor__name}>{c.name}</span>
          </section>
        ))}
      </div>
    </section>
  );
};

export default ColorPicker;
