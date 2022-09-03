import { ITask } from "../types/models/ITask";

export const useNotCompletedTasks = (tasks: ITask[] | null) => {
  if (!tasks) return [] as ITask[];

  return tasks.filter((task) => !task.status);
};
