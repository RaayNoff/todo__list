import DateApi from "../api/dateApi";
import useTasks from "./useTasks";

export const useTodayTasks = () => {
  const tasks = useTasks();

  return tasks.filter((task) => DateApi.isToday(task.endTime));
};
