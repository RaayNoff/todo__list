import { IList } from "./models/IList";
import { ITask } from "./models/ITask";

export const noFiltredObject = {
  notSharedLists: [],
  sharedLists: [],
};

export const notList: IList = {
  color: "red",
  id: 1,
  listName: "No name",
  accessedUsers: [],
  tasks: [],
};

export const notTask: ITask = {
  id: 1,
  taskName:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  comments: [],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  endTime: 1,
  status: false,
};

export const notTaskArr: ITask[] = [notTask];
