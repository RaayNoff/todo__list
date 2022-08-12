import React, { FC, SyntheticEvent, useState } from "react";
import { InputSizeTypes } from "../../../types/input";
import ColorPicker from "../colorPicker";
import HeaderInsert from "../headerInsert";
import Input from "../input";
import s from "./createList.module.scss";

const CreateList: FC = () => {
  const [value, setValue] = useState<string>("");
  const [color, setColor] = useState<string>("#8B8B8B");

  const onColorClicked = (color: string) => {
    setColor(color);
  };

  return (
    <form className={s.createList}>
      <HeaderInsert>Добавить список</HeaderInsert>
      <main className={s.createList__content}>
        <Input
          inputValue={value}
          title="Название"
          onChangeCallback={setValue}
          size={InputSizeTypes.BIG}
        />
        <ColorPicker onColorClicked={onColorClicked} />
      </main>
    </form>
  );
};

export default CreateList;
