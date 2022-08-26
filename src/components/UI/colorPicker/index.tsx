import React, { Dispatch, FC, SetStateAction, useState } from "react";
import Select, { OnChangeValue } from "react-select";
import makeAnimated from "react-select/animated";
import { Colors } from "../../../types/classes/Colors";
import { IColor } from "../../../types/models/IColor";
import s from "./colorPicker.module.scss";
import "./select/select.scss";
import { colorStyles } from "./select/styles";

interface IColorPickerProps {
  colorCallback: Dispatch<SetStateAction<string>>;
}

const animatedComponents = makeAnimated();

const ColorPicker: FC<IColorPickerProps> = ({ colorCallback }) => {
  const [currentColor, setCurrentColor] = useState(Colors.pallete[0].value);

  const getColor = (): IColor | undefined => {
    return Colors.pallete.find((c) => c.value === currentColor);
  };

  const onChange = (newValue: OnChangeValue<IColor, boolean>) => {
    setCurrentColor((newValue as IColor).value);
    colorCallback((newValue as IColor).value);
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
          //  isLoading={true}
          //  isDisabled={true}
          components={animatedComponents}
        />
      </div>
    </section>
  );
};

export default ColorPicker;