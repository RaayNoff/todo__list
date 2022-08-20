import React, { FC } from "react";
import s from "./endtime.module.scss";

interface IEndtimeProps {
  date: string;
}

const Endtime: FC<IEndtimeProps> = ({ date }) => {
  return (
    <section className={s.endtime}>
      <div className={s.endtime__box}></div>
      <p className={s.endtime__text}>{date}</p>
    </section>
  );
};

export default Endtime;
