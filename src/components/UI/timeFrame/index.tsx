import React, { FC, useEffect, useRef } from "react";

import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { HomeContentDisplaying } from "../../../types/enums/HomeContentDisplaying";
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
  const { nowDisplaying } = useTypedSelector((state) => state.homeContent);
  const btnRef = useRef<HTMLButtonElement>(null);
  const { displayToday, displayFuture } = useActions();
  const timeFrameColor = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timeFrameColor.current)
      timeFrameColor.current.style.backgroundColor = getFrameColor();
    if (
      btnRef.current &&
      defaultGenerator &&
      nowDisplaying === HomeContentDisplaying.TODAY_TASKS
    ) {
      btnRef.current.classList.add("elementContentGenerator");
    }
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
      ref={btnRef}
      className={s.timeFrame}
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
