import { ITask } from "../types/models/ITask";
import { useTypedSelector } from "./useTypedSelector";

export const useTaskById = (taskId: number): ITask => {
  const { lists } = useTypedSelector((state) => state.list);

  const _temp: ITask[] = [];

  lists.forEach((list) => {
    list.tasks.forEach((task) => {
      if (task.id === taskId) _temp.push(task);
    });
  });

  const [result] = _temp;

  return result;
};
