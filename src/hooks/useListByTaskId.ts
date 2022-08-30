import { contentApi } from "../services/contentApi";
import { IList } from "../types/models/IList";
import { notList } from "../types/noData";
import { useTypedSelector } from "./useTypedSelector";

export const useListByTaskId = (taskId: number): IList => {
  const { data: lists } = contentApi.useFetchAllListsQuery(0);

  if (!lists) return notList;

  const _temp: IList[] = [];

  lists.forEach((list) => {
    list.tasks.forEach((task) => {
      if (task.id === taskId) _temp.push(list);
    });
  });

  const [result] = _temp;

  return result;
};
