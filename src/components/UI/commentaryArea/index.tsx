import React, { FC, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { contentApi } from "../../../services/contentApi";
import { ButtonTypes } from "../../../types/enums/ButtonTypes";
import Button from "../button";
import s from "./commentaryArea.module.scss";

interface ICommentaryAreaProps {
  taskId: number;
}

const CommentaryArea: FC<ICommentaryAreaProps> = ({ taskId }) => {
  const [addComment] = contentApi.useFetchTaskCommentMutation();
  const { user } = useTypedSelector((state) => state.authorization);
  const [text, setText] = useState<string>("");

  const fetchNewComment = (E: React.MouseEvent) => {
    addComment({ content: text, taskId: taskId, userEmail: user.email || "" });
  };

  return (
    <section className={s.commentaryArea}>
      <textarea
        placeholder="Комментировать"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={s.commentaryArea__textarea}
      ></textarea>
      <Button
        btnType={ButtonTypes.ACTION}
        text="Отправить"
        onClickCallback={fetchNewComment}
      />
    </section>
  );
};

export default CommentaryArea;
