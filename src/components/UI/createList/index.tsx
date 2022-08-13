import React, { FC, useEffect, useState } from "react";
import { ButtonTypes } from "../../../types/button";
import { Colors } from "../../../types/colors";
import { InputSizeTypes } from "../../../types/input";
import Button from "../button";
import ColorPicker from "../colorPicker";
import FooterInsert from "../footerInsert";
import HeaderInsert from "../headerInsert";
import Input from "../input";
import s from "./createList.module.scss";

const CreateList: FC = () => {
  const [value, setValue] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(
    Colors.pallete[0].value
  );

  useEffect(() => {
    //Some code...
  }, [selectedColor]);

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
        <ColorPicker colorCallback={setSelectedColor} />
      </main>
      <FooterInsert>
        <Button btnType={ButtonTypes.CANCEL} text="Отмена" />
        <Button btnType={ButtonTypes.ACTION} text="Добавить" />
      </FooterInsert>
    </form>
  );
};

export default CreateList;
