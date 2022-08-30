import { contentApi } from "../services/contentApi";
import { notTaskArr } from "../types/noData";

export const useTasksByListId = (listId: number) => {
  const { data: lists } = contentApi.useFetchAllListsQuery(0);

  if (!lists) return notTaskArr;

  const [requiredList] = lists.filter((list) => list.id === listId);

  return requiredList.tasks;
};
