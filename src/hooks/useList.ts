import { IList } from "../types/models/IList";
import { useTypedSelector } from "./useTypedSelector";

export const useList = (targetListId: number): IList => {
  const { lists } = useTypedSelector((state) => state.list);

  const requiredList = lists.filter((l) => l.id === targetListId);

  const { colors, id, listName, tasks } = requiredList[0];

  return { id, listName, colors, tasks };
};
