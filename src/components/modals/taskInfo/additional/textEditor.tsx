import React, { FC, useState } from "react";
import { useTaskById } from "../../../../hooks/useTaskById";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { contentApi } from "../../../../services/contentApi";
import Controls from "./controls";
import s from "./textEditor.module.scss";

export enum editorType {
  TEXTAREA = "TEXTAREA",
  INPUT = "INPUT",
}

interface ITextEditorProps {
  editType: editorType;
  defaultValue: string;
}

const TextEditor: FC<ITextEditorProps> = ({ defaultValue, editType }) => {
  const {
    taskInfo: { currentTaskId: taskId },
  } = useTypedSelector((state) => state.popups);
  const task = useTaskById(taskId);
  const [text, setText] = useState(defaultValue);
  const [editTask] = contentApi.useFetchTaskEditMutation();
  const [isEditor, setIsEditor] = useState(false);
  let textSelector;
  let textEllipsis;
  let editorJSX;

  const saveEdit = (e: React.MouseEvent) => {
    if (editType === editorType.INPUT)
      editTask({
        taskId: taskId,
        description: task.description,
        taskName: text,
        status: task.status,
      });

    if (editType === editorType.TEXTAREA)
      editTask({
        taskId: taskId,
        taskName: task.taskName,
        description: text,
        status: task.status,
      });
    setIsEditor((prev) => !prev);
  };
  const cancelEdit = (e: React.MouseEvent) => {
    setIsEditor((prev) => !prev);
    setText(defaultValue);
  };

  if (editType === editorType.INPUT) {
    editorJSX = (
      <input
        className={s.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
    );
    textSelector = s.bold;
    textEllipsis = "textEllipsis";
  } else if (editType === editorType.TEXTAREA) {
    editorJSX = (
      <textarea
        className={s.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    );

    textSelector = s.light;
    textEllipsis = "";
  }

  if (!isEditor)
    return (
      <p
        onClick={() => setIsEditor((prev) => !prev)}
        className={`${textSelector} ${textEllipsis}`}
        title={defaultValue}
      >
        {defaultValue}
      </p>
    );

  return (
    <section className={s.textEditor}>
      {editorJSX}
      <Controls onCancel={cancelEdit} onSave={saveEdit} />
    </section>
  );
};

export default TextEditor;
