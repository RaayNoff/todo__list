import React, { FC, useEffect, useRef } from "react";
import { useActions } from "../../../hooks/useActions";
import {
  TimeFrameColors,
  TimeFrameTypes,
} from "../../../types/enums/TimeFrame";
import s from "./timeFrame.module.scss";

interface ITimeFrameProps {
  frameType: TimeFrameTypes;
  clickCallback: (e: React.MouseEvent) => void;
  defaultGenerator?: boolean;
}

const TimeFrame: FC<ITimeFrameProps> = ({
  frameType,
  clickCallback,
  defaultGenerator,
}) => {
  const { displayToday, displayFuture } = useActions();
  const timeFrameColor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timeFrameColor.current)
      timeFrameColor.current.style.backgroundColor = getFrameColor();
  });

  const getFrameColor = (): string => {
    if (frameType === TimeFrameTypes.TODAY) return TimeFrameColors.RED;

    return TimeFrameColors.BLUE;
  };

  const handleClick = (e: React.MouseEvent) => {
    clickCallback(e);

    if (frameType === TimeFrameTypes.TODAY) displayToday();
    else if (frameType === TimeFrameTypes.UPCOMING) displayFuture();
  };

  return (
    <button
      className={
        defaultGenerator
          ? `${s.timeFrame} elementContentGenerator`
          : s.timeFrame
      }
      onClick={(e) => handleClick(e)}
    >
      <div className={s.timeFrame__color} ref={timeFrameColor}></div>
      <p className={s.timeFrame__text}>
        {frameType === TimeFrameTypes.TODAY ? "Сегодня" : "Предстоящее"}
      </p>
    </button>
  );
};

export default TimeFrame;
