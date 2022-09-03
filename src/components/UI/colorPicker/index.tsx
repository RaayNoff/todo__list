import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import Select, { OnChangeValue } from "react-select";
import makeAnimated from "react-select/animated";
import { Colors } from "../../../types/classes/Colors";
import { IColor } from "../../../types/models/IColor";
import s from "./colorPicker.module.scss";
import "./select/select.scss";
import { colorStyles } from "./select/styles";

interface IColorPickerProps {
  colorCallback: Dispatch<SetStateAction<string>>;
  color?: string;
}

const animatedComponents = makeAnimated();

const ColorPicker: FC<IColorPickerProps> = ({
  colorCallback,
  color = "#553fdb",
}) => {
  const [currentColor, setCurrentColor] = useState(getItem(color));

  useEffect(() => {
    setCurrentColor(getItem(color));
    colorCallback(color);
  }, [color, colorCallback]);

  function getItem(hex: string) {
    const requiredItem = Colors.pallete.find((c) => c.color === hex);

    return requiredItem;
  }

  const getColor = (): IColor | undefined => {
    return Colors.pallete.find((c) => c.color === currentColor?.color);
  };

  const onChange = (newValue: OnChangeValue<IColor, boolean>) => {
    const newcolor = newValue as IColor;
    setCurrentColor(newcolor);
    colorCallback(newcolor.color);
  };

  return (
    <section className={s.colorPicker}>
      <header className={s.colorPicker__title}>Выберите цвет</header>
      <div className={s.colorPicker__colors}>
        <Select
          classNamePrefix="select"
          options={Colors.pallete}
          defaultValue={Colors.pallete[0]}
          value={getColor()}
          //@ts-ignore
          styles={colorStyles}
          //@ts-ignore
          onChange={onChange}
          isSearchable={false}
          components={animatedComponents}
        />
      </div>
    </section>
  );
};

export default ColorPicker;
