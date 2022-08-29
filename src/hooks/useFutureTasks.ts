import DateApi from "../api/dateApi";
import useTasks from "./useTasks";

export const useFutureTasks = () => {
  const tasks = useTasks();

  return tasks.filter((task) => DateApi.isFuture(task.endTime));
};
