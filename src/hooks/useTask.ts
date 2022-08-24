import { ITask } from "../types/models/ITask";
import { useTypedSelector } from "./useTypedSelector";

export const useTask = (targetId: number): ITask => {
  const { lists } = useTypedSelector((state) => state.list);

  const requiredList = lists.filter((l) =>
    l.tasks.filter((t) => t.id === targetId)
  );

  const { tasks } = requiredList[0];
  const { id, taskName, status, endTime, description, comments } = tasks[0];

  return { id, taskName, status, endTime, description, comments };
};
