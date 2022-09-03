import { contentApi } from "../services/contentApi";
import { ITask } from "../types/models/ITask";

export const useTasksByListId = (listId: number) => {
  const { data: lists } = contentApi.useFetchAllListsQuery(0);

  if (!lists || lists.length < 1 || listId === -1) return [] as ITask[];

  const [requiredList] = lists.filter((list) => list.id === listId);

  return requiredList.tasks;
};
