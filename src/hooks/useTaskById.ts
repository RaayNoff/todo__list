import { contentApi } from "../services/contentApi";
import { ITask } from "../types/models/ITask";
import { notTask } from "../types/noData";

import { useTypedSelector } from "./useTypedSelector";

export const useTaskById = (taskId: number): ITask => {
  const { data: lists } = contentApi.useFetchAllListsQuery(0);
  const {
    taskInfo: { lastDeletedTaskId },
  } = useTypedSelector((state) => state.popups);

  if (
    !lists ||
    lists.length < 1 ||
    taskId === -1 ||
    taskId === lastDeletedTaskId
  )
    return notTask;

  const _temp: ITask[] = [];

  lists.forEach((list) =>
    list.tasks.forEach((task) => {
      if (task.id === taskId) _temp.push(task);
    }),
  );

  return _temp[0];
};
