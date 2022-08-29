import { useTypedSelector } from "./useTypedSelector";

export const useTasksByListId = (listId: number) => {
  const { lists } = useTypedSelector((state) => state.list);

  const [requiredList] = lists.filter((list) => list.id === listId);

  return requiredList.tasks;
};
