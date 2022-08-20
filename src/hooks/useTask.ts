import { ITask } from "../types/task";
import { useTypedSelector } from "./useTypedSelector";

export const useTask = (targetId: number): ITask => {
  const { lists } = useTypedSelector((state) => state.lists);

  const requiredList = lists.filter((l) =>
    l.tasks.filter((t) => t.id === targetId)
  );

  const { tasks } = requiredList[0];
  const { id, taskName, status, endTime, description, comments } = tasks[0];

  return { id, taskName, status, endTime, description, comments };
};
