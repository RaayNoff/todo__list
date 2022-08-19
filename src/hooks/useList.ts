import { IList } from "../types/list";
import { useTypedSelector } from "./useTypedSelector";

export const useList = (targetListId: string): IList => {
  const { lists } = useTypedSelector((state) => state.lists);

  const requiredList = lists.filter((l) => l.id === targetListId);

  const { colors, id, listName, tasks } = requiredList[0];

  return { id, listName, colors, tasks };
};
