import { contentApi } from "../services/contentApi";
import { IList } from "../types/models/IList";

export const useFilteredLists = (): {
  notSharedLists: IList[];
  sharedLists: IList[];
} => {
  const { data: lists } = contentApi.useFetchAllListsQuery(0);

  if (!lists) return { notSharedLists: [], sharedLists: [] };

  const sharedLists = lists.filter((list) => list.accessedUsers.length >= 1);

  const notSharedLists = lists.filter(
    (list) => list.accessedUsers.length === 0
  );

  return { notSharedLists, sharedLists };
};
