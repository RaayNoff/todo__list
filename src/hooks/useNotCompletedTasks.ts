import { ITask } from "../types/models/ITask";

export const useNotCompletedTasks = (tasks: ITask[]) => {
  return tasks.filter((task) => !task.status);
};
