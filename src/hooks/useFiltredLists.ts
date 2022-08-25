import { useTypedSelector } from "./useTypedSelector";

export const useFilteredLists = () => {
  const { lists } = useTypedSelector((state) => state.list);

  const sharedLists = lists.filter((list) => list.accessedUsers.length >= 1);

  const notSharedLists = lists.filter(
    (list) => list.accessedUsers.length === 0
  );

  return { notSharedLists, sharedLists };
};
