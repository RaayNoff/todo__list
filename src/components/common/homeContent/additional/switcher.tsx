import { FC } from "react";
import { useCompletedTasks } from "../../../../hooks/useCompletedTasks";
import { useFutureTasks } from "../../../../hooks/useFutureTasks";
import { useListById } from "../../../../hooks/useListById";
import { useNotCompletedTasks } from "../../../../hooks/useNotCompletedTasks";
import { useTasksByListId } from "../../../../hooks/useTasksByListId";
import { useTodayTasks } from "../../../../hooks/useTodayTasks";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { HomeContentDisplaying } from "../../../../types/enums/HomeContentDisplaying";
import ViewTemplate from "./viewTemplate";

const Switcher: FC = () => {
  const { nowDisplaying, listId } = useTypedSelector(
    (state) => state.homeContent
  );

  const { listName } = useListById(listId);

  const todayTasks = useTodayTasks();
  const todayNotCompletedTasks = useNotCompletedTasks(todayTasks);
  const todayCompletedTasks = useCompletedTasks(todayTasks);

  const futureTasks = useFutureTasks();
  const futureNotCompletedTasks = useNotCompletedTasks(futureTasks);
  const futureCompletedTasks = useCompletedTasks(futureTasks);

  const listTasks = useTasksByListId(listId);
  const listNotCompletedTasks = useNotCompletedTasks(listTasks);
  const listCompletedTasks = useCompletedTasks(listTasks);

  switch (nowDisplaying) {
    case HomeContentDisplaying.TODAY_TASKS:
      return (
        <ViewTemplate
          viewTitle="Сегодня"
          notCompletedTasks={todayNotCompletedTasks}
          completedTasks={todayCompletedTasks}
          isList={false}
        />
      );

    case HomeContentDisplaying.LIST:
      return (
        <ViewTemplate
          viewTitle={listName}
          notCompletedTasks={listNotCompletedTasks}
          completedTasks={listCompletedTasks}
          isList={true}
        />
      );

    case HomeContentDisplaying.FUTURE_TASKS:
      return (
        <ViewTemplate
          viewTitle="Предстоящее"
          completedTasks={futureCompletedTasks}
          notCompletedTasks={futureNotCompletedTasks}
          isList={false}
        />
      );

    default:
      return null;
  }
};

export default Switcher;
