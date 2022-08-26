import DateApi from "../api/dateApi";
import useTasks from "./useTasks";

export const useTodayTasks = () => {
  const tasks = useTasks();
  const todayTasks = tasks.filter((task) => DateApi.isToday(task.endTime));

  return todayTasks;
};
