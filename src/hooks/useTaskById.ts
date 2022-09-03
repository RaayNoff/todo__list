import { contentApi } from "../services/contentApi";
import { ITask } from "../types/models/ITask";
import { notTask } from "../types/noData";
import { useTypedSelector } from "./useTypedSelector";

export const useTaskById = (taskId: number): ITask => {
  const { data: tasks } = contentApi.useFetchAllTasksQuery(0);
  const {
    taskInfo: { lastDeletedTaskId },
  } = useTypedSelector((state) => state.popups);

  if (
    !tasks ||
    tasks.length < 1 ||
    taskId === -1 ||
    taskId === lastDeletedTaskId
  )
    return notTask;

  const _temp: ITask[] = [];

  tasks.forEach((task) => {
    if (task.id === taskId) _temp.push(task);
  });

  const [result] = _temp;

  return result;
};
