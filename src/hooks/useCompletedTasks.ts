import { ITask } from "../types/models/ITask";

export const useCompletedTasks = (tasks: ITask[]) => {
  return tasks.filter((task) => task.status);
};
