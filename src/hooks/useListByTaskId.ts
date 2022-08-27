import { IList } from "../types/models/IList";
import { useTypedSelector } from "./useTypedSelector";

export const useListByTaskId = (taskId: number): IList => {
  const { lists } = useTypedSelector((state) => state.list);

  const _temp: IList[] = [];

  lists.forEach((list) => {
    list.tasks.forEach((task) => {
      if (task.id === taskId) _temp.push(list);
    });
  });

  const [result] = _temp;

  return result;
};
