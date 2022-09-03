import { ITask } from "../types/models/ITask";

export const useCompletedTasks = (tasks: ITask[] | null) => {
  if (!tasks) return [] as ITask[];

  return tasks.filter((task) => task.status);
};
