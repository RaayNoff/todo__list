import { ITask } from "../types/task";
import { useTypedSelector } from "./useTypedSelector";

export const useListId = (taskId: number) => {
  const { lists } = useTypedSelector((state) => state.lists);

  const [result] = lists.filter((list) =>
    list.tasks.filter((task) => task.id === taskId)
  );

  return result.id;
};
