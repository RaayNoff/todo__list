import React, { FC, useState } from "react";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import { InputSizeTypes } from "../../../types/enums/InputSizeTypes";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { contentApi } from "../../../services/contentApi";
import { useListById } from "../../../hooks/useListById";
import Button from "../../UI/button";
import ColorPicker from "../../UI/colorPicker";
import FooterInsert from "../../UI/footerInsert";
import HeaderInsert from "../../UI/headerInsert";
import Input from "../../UI/input";
import s from "../createList/createList.module.scss";

const EditList: FC = () => {
  const {
    editList: { currentlistId, status },
  } = useTypedSelector((state) => state.popups);

  const { listName: stateListName, color: stateColor } =
    useListById(currentlistId);

  const [listName, setListName] = useState<string>(stateListName);
  const [selectedColor, setSelectedColor] = useState<string>(stateColor);

  const { editListToggleOff } = useActions();
  const [editList, {}] = contentApi.useFetchListsEditMutation();

  const onClickedCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    editListToggleOff();
  };
  const onClickedAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    editList({
      listId: currentlistId,
      color: selectedColor,
      listName: listName,
    });
    editListToggleOff();
  };

  return (
    <div
      className={status ? "popup enabled" : "popup"}
      onClick={(e) => onClickedCancel(e)}
    >
      <form className={s.createList} onClick={(e) => e.stopPropagation()}>
        <HeaderInsert>Редактировать список</HeaderInsert>
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
            text="Сохранить"
            onClickCallback={onClickedAdd}
          />
        </FooterInsert>
      </form>
    </div>
  );
};

export default EditList;
