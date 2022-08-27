import React, { FC } from "react";
import { useCompletedTasks } from "../../../../hooks/useCompletedTasks";
import { useNotCompletedTasks } from "../../../../hooks/useNotCompletedTasks";
import { useTodayTasks } from "../../../../hooks/useTodayTasks";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { HomeContentDisplaying } from "../../../../types/enums/HomeContentDisplaying";
import ViewTemplate from "./viewTemplate";

const Switcher: FC = () => {
  const { nowDisplaying, listId } = useTypedSelector(
    (state) => state.homeContent
  );
  const todayTasks = useTodayTasks();
  const notCompletedTasks = useNotCompletedTasks(todayTasks);
  const completedTasks = useCompletedTasks(todayTasks);

  switch (nowDisplaying) {
    case HomeContentDisplaying.TODAY_TASKS:
      return (
        <ViewTemplate
          viewTitle="Сегодня"
          notCompletedTasks={notCompletedTasks}
          completedTasks={completedTasks}
        />
      );

    default:
      return null;
  }
};

export default Switcher;
