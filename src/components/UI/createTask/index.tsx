import React, { FC, useState } from "react";

import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { contentApi } from "../../../services/contentApi";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import Button from "../button";
import DatePick from "../datePick";

import PlusSVG from "./additional/plusSVG";
import s from "./createTask.module.scss";

const CreateTask: FC = () => {
  const { listId } = useTypedSelector((state) => state.homeContent);
  const [isEditor, setIsEditor] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [date, setDate] = useState(0);
  const [addTask] = contentApi.useFetchTaskAddMutation();

  const onCancel = (e: React.MouseEvent) => setIsEditor(!isEditor);
  const onClick = (e: React.MouseEvent) => {
    addTask({
      taskName: taskName,
      description: taskDesc,
      endTime: date,
      listId: listId,
    });
    setTaskName("");
    setTaskDesc("");
    setDate(0);
  };

  if (!isEditor)
    return (
      <section className={s.noeditor} onClick={() => setIsEditor(!isEditor)}>
        <div className={s.noeditor__add}>{PlusSVG()}</div>
        <p className={s.noeditor__text}>Добавить задачу</p>
      </section>
    );

  return (
    <section className={s.editor}>
      <section className={s.editor__inputbox}>
        <div className={s.editor_inputcontainer}>
          <input
            className={s.editor__input}
            type="text"
            value={taskName}
            placeholder="Название задачи"
            onChange={(e) => setTaskName(e.target.value)}
          />
          <textarea
            className={`${s.editor__input} ${s.editor__textarea}`}
            value={taskDesc}
            placeholder="Описание"
            onChange={(e) => setTaskDesc(e.target.value)}
          />
        </div>
        <DatePick timestampCallback={setDate} />
      </section>
      <section className={s.editor__buttons}>
        <Button
          btnType={ButtonTypes.CANCEL}
          text="Отмена"
          onClickCallback={onCancel}
        />
        <Button
          btnType={ButtonTypes.ACTION}
          text="Добавить"
          onClickCallback={onClick}
        />
      </section>
    </section>
  );
};

export default CreateTask;
