import { IList } from "../types/models/IList";
import { useTypedSelector } from "./useTypedSelector";

export const useListById = (targetListId: number): IList => {
  const { lists } = useTypedSelector((state) => state.list);

  const requiredList = lists.filter((l) => l.id === targetListId);

  const { color, id, listName, tasks, accessedUsers } = requiredList[0];

  return { id, listName, color, tasks, accessedUsers };
};
