import { FC } from "react";

import DateApi from "../../../api/dateApi";
import { timestamp } from "../../../types/Timestamp";

import s from "./commentary.module.scss";

interface ICommentaryProps {
  email: string;
  content: string;
  timestamp: timestamp;
}

const Commentary: FC<ICommentaryProps> = ({ email, content, timestamp }) => {
  const date = DateApi.getCommentTime(timestamp);

  return (
    <section className={s.commentary}>
      <div className={s.commentary__logoBG}></div>
      <section className={s.commentary__data}>
        <header className={s.commentary__header}>
          <p className={`${s.commentary__email} textEllipsis`} title={email}>
            {email}
          </p>
          <p className={s.commentary__date}>{date}</p>
        </header>
        <p className={s.commentary__content}>{content}</p>
      </section>
    </section>
  );
};

export default Commentary;
