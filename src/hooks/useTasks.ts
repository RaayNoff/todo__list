import { ITask } from "../types/models/ITask";
import { useTypedSelector } from "./useTypedSelector";

export default function useTasks() {
  const { lists } = useTypedSelector((state) => state.list);

  const result: ITask[] = [];

  lists.forEach((list) => list.tasks.forEach((task) => result.push(task)));

  return result;
}
