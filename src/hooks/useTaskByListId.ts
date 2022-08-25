import { useTypedSelector } from "./useTypedSelector";

export const useTaskByListId = (taskId: number) => {
  const { lists } = useTypedSelector((state) => state.list);

  const [result] = lists.filter((list) =>
    list.tasks.filter((task) => task.id === taskId)
  );

  return result.id;
};
