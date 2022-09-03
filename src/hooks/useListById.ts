import { contentApi } from "../services/contentApi";
import { IList } from "../types/models/IList";
import { notList } from "../types/noData";

export const useListById = (targetListId: number): IList => {
  const { data: lists } = contentApi.useFetchAllListsQuery(0);

  if (!lists || lists.length < 1 || targetListId === -1) return notList;

  const [requiredList] = lists.filter((l) => l.id === targetListId);

  return requiredList;
};
