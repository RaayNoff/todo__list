import { useTypedSelector } from "./useTypedSelector";

export const useListByTaskId = (taskId: number) => {
  const { lists } = useTypedSelector((state) => state.list);

  const [requiredList] = lists.filter((list) =>
    list.tasks.filter((task) => task.id === taskId)
  );

  return { requiredList };
};
