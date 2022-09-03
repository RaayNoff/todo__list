import React, { FC, useState } from "react";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import { Colors } from "../../../types/classes/Colors";
import { InputSizeTypes } from "../../../types/enums/InputSizeTypes";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { contentApi } from "../../../services/contentApi";
import Button from "../../UI/button";
import ColorPicker from "../../UI/colorPicker";
import FooterInsert from "../../UI/footerInsert";
import HeaderInsert from "../../UI/headerInsert";
import Input from "../../UI/input";
import s from "./createList.module.scss";

const CreateList: FC = () => {
  const [listName, setListName] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(
    Colors.pallete[0].color
  );
  const { createList } = useTypedSelector((state) => state.popups);
  const { createListToggleOff } = useActions();
  const [addList] = contentApi.useFetchListsAddMutation();

  const onClickedCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    createListToggleOff();
  };
  const onClickedAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addList({ listName: listName, color: selectedColor });
    setListName("");
    setSelectedColor(Colors.pallete[0].color);
    createListToggleOff();
  };

  return (
    <div
      className={createList ? "popup enabled" : "popup"}
      onClick={(e) => onClickedCancel(e)}
    >
      <form className={s.createList} onClick={(e) => e.stopPropagation()}>
        <HeaderInsert>Добавить список</HeaderInsert>
        <main className={s.createList__content}>
          <Input
            inputValue={listName}
            title="Название"
            onChangeCallback={setListName}
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
    </div>
  );
};

export default CreateList;
