import React, { FC, SyntheticEvent, useEffect, useState } from "react";
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

  const onClickedCancel = (e: SyntheticEvent) => {};
  const onClickedAdd = (e: SyntheticEvent) => {};

  return (
    <form className={s.createList}>
      <HeaderInsert>Добавить список</HeaderInsert>
      <main className={s.createList__content}>
        <Input
          inputValue={value}
          title="Название"
          onChangeCallback={setValue}
          size={InputSizeTypes.BIG}
          placeholder={"Введите название..."}
        />
        <ColorPicker colorCallback={setSelectedColor} />
      </main>
      <FooterInsert>
        <Button
          btnType={ButtonTypes.CANCEL}
          text="Отмена"
          onClickCallback={onClickedCancel}
        />
        <Button
          btnType={ButtonTypes.ACTION}
          text="Добавить"
          onClickCallback={onClickedAdd}
        />
      </FooterInsert>
    </form>
  );
};

export default CreateList;
