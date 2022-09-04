import { contentApi } from "../services/contentApi";
import { ITask } from "../types/models/ITask";
import { notTaskArr } from "../types/noData";

export default function useTasks() {
  const { data: lists } = contentApi.useFetchAllListsQuery(0);

  if (!lists || lists.length < 1) return notTaskArr;
  const result: ITask[] = [];

  lists.forEach((list) => result.push(...list.tasks));

  return result;
}
