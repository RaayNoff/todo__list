import { FC, SyntheticEvent, useState } from "react";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import Button from "../button";
import DatePick from "../datePick";
import PlusSVG from "./additional/plusSVG";
import s from "./createTask.module.scss";

interface ICreateTask {
  listId: number;
}

const CreateTask: FC<ICreateTask> = ({ listId }) => {
  const [isEditor, setIsEditor] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [date, setDate] = useState(0);

  const onCancel = (e: SyntheticEvent) => setIsEditor(!isEditor);
  const onClick = (e: SyntheticEvent) => {
    setIsEditor(!isEditor);
    ///FetchCallback
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
          <input
            className={s.editor__input}
            type="text"
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
