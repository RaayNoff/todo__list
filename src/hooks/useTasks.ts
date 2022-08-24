import { useTypedSelector } from "./useTypedSelector";

export default function useTasks() {
  const { lists } = useTypedSelector((state) => state.list);

  const [result] = lists.map((list) => list.tasks.map((task) => task));

  return result;
}
