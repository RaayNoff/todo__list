import { FC, useState } from "react";
import { ButtonTypes } from "../../../types/button";
import Button from "../button";
import s from "./commentaryArea.module.scss";

interface ICommentaryAreaProps {
  taskId: string;
}

const CommentaryArea: FC<ICommentaryAreaProps> = ({ taskId }) => {
  const [text, setText] = useState<string>("");

  const fetchNewComment = () => {
    //Заглушка для кнопки, буду делать запрос через редукс отправляя taskID
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
