import { contentApi } from "../services/contentApi";
import { IList } from "../types/models/IList";
import { notList } from "../types/noData";

export const useListById = (targetListId: number): IList => {
  const { data: lists } = contentApi.useFetchAllListsQuery(0);

  if (!lists) return notList;

  const [requiredList] = lists.filter((l) => l.id === targetListId);

  const { color, id, listName, tasks, accessedUsers } = requiredList;

  return { id, listName, color, tasks, accessedUsers };
};
