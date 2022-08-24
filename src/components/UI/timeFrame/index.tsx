import React, { FC, useEffect, useRef } from "react";
import {
  TimeFrameColors,
  TimeFrameTypes,
} from "../../../types/enums/TimeFrame";
import s from "./timeFrame.module.scss";

interface ITimeFrameProps {
  frameType: TimeFrameTypes;
}

const TimeFrame: FC<ITimeFrameProps> = ({ frameType }) => {
  const timeFrameColor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timeFrameColor.current)
      timeFrameColor.current.style.backgroundColor = getFrameColor();
  });

  const getFrameColor = (): string => {
    if (frameType === TimeFrameTypes.TODAY) return TimeFrameColors.RED;

    return TimeFrameColors.BLUE;
  };

  return (
    <section className={s.timeFrame}>
      <div className={s.timeFrame__color} ref={timeFrameColor}></div>
      <p className={s.timeFrame__text}>
        {frameType === TimeFrameTypes.TODAY ? "Сегодня" : "Предстоящее"}
      </p>
    </section>
  );
};

export default TimeFrame;
