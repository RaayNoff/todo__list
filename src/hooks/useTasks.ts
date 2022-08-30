import { contentApi } from "../services/contentApi";
import { notTaskArr } from "../types/noData";

export default function useTasks() {
  const { data: tasks } = contentApi.useFetchAllTasksQuery(0);

  if (!tasks) return notTaskArr;

  return tasks;
}
