import React, { Dispatch, FC, SetStateAction, useState } from "react";
import Select, { OnChangeValue } from "react-select";
import makeAnimated from "react-select/animated";
import { Colors, IPallete } from "../../../types/colors";
import s from "./colorPicker.module.scss";
import "./select/select.scss";
import { colorStyles } from "./select/styles";

interface IColorPickerProps {
  colorCallback: Dispatch<SetStateAction<string>>;
}

const animatedComponents = makeAnimated();

const ColorPicker: FC<IColorPickerProps> = ({ colorCallback }) => {
  const [currentColor, setCurrentColor] = useState(Colors.pallete[0].value);

  const getColor = (): IPallete | undefined => {
    return Colors.pallete.find((c) => c.value === currentColor);
  };

  const onChange = (newValue: OnChangeValue<IPallete, boolean>) => {
    setCurrentColor((newValue as IPallete).value);
    colorCallback((newValue as IPallete).value);
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
