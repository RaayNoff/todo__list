import { ITask } from "../types/task";
import { useTypedSelector } from "./useTypedSelector";

export const useListId = (targetTask: ITask) => {
  const { lists } = useTypedSelector((state) => state.lists);

  const [result] = lists.filter((list) =>
    list.tasks.filter((task) => task.id === targetTask.id)
  );

  return result.id;
};
