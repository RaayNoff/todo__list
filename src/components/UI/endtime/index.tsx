import React, { FC } from "react";
import DateApi from "../../../api/dateApi";
import { timestamp } from "../../../types/Timestamp";
import s from "./endtime.module.scss";

interface IEndtimeProps {
  timestamp: timestamp;
}

const Endtime: FC<IEndtimeProps> = ({ timestamp }) => {
  const date = DateApi.getEndtime(timestamp);

  return (
    <section className={s.endtime}>
      <div className={s.endtime__box}></div>
      <p className={s.endtime__text}>{date}</p>
    </section>
  );
};

export default Endtime;
