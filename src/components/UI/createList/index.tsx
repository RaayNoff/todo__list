import React, { FC, SyntheticEvent, useState } from "react";
import { InputSizeTypes } from "../../../types/input";
import HeaderInsert from "../headerInsert";
import Input from "../input";
import s from "./createList.module.scss";

const CreateList: FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <form className={s.createList}>
      <HeaderInsert>Добавить список</HeaderInsert>
      <main className={s.createList__content}>
        <Input
          inputValue={value}
          title="Название"
          onChangeCallback={setValue}
          size={InputSizeTypes.MEDIUM}
        />
      </main>
    </form>
  );
};

export default CreateList;
