import { contentApi } from "../services/contentApi";
import { ITask } from "../types/models/ITask";
import { notTask } from "../types/noData";

export const useTaskById = (taskId: number): ITask => {
  const { data: tasks } = contentApi.useFetchAllTasksQuery(0);

  if (!tasks) return notTask;

  const _temp: ITask[] = [];

  tasks.forEach((task) => {
    if (task.id === taskId) _temp.push(task);
  });

  const [result] = _temp;

  return result;
};
