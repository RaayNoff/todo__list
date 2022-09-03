import React, { Dispatch, FC, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { timestamp } from "../../../types/Timestamp";
import s from "./datePick.module.scss";

interface IDatePick {
  timestampCallback: Dispatch<React.SetStateAction<timestamp>>;
}

const DatePick: FC<IDatePick> = ({ timestampCallback }) => {
  const [startDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  registerLocale("ru", ru);

  useEffect(() => {
    if (!selectedDate) return;
    timestampCallback(Math.floor(selectedDate.getTime() / 1000));
  });

  return (
    <section className={s.datepicker}>
      <section className={s.datepicker__label}>
        <div className={s.datepicker__box}></div>
        <p className={s.datepicker__endtime}>Срок&nbsp;выполнения:</p>
      </section>
      <DatePicker
        wrapperClassName={s.picker}
        popperClassName={s.picker__poper}
        selected={selectedDate}
        locale={"ru"}
        onChange={(date: Date) => setSelectedDate(date)}
        className={s.datepicker}
        dateFormat={"d MMM yyyy HH:mm"}
        startDate={startDate}
        minDate={startDate}
        timeInputLabel={"Время"}
        showTimeInput
      ></DatePicker>
    </section>
  );
};

export default DatePick;
