import React, { FC } from "react";
import s from "./commentary.module.scss";

interface ICommentaryProps {
  email: string;
  content: string;
  date: string;
}

const Commentary: FC<ICommentaryProps> = ({ email, content, date }) => {
  return (
    <section className={s.commentary}>
      <div className={s.commentary__logoBG}></div>
      <section className={s.commentary__data}>
        <header className={s.commentary__header}>
          <p className={s.commentary__email}>{email}</p>
          <p className={s.commentary__date}>{date}</p>
        </header>
        <div className={s.commentary__content}>{content}</div>
      </section>
    </section>
  );
};

export default Commentary;
