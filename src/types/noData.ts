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
  taskName: "No name",
  comments: [],
  description: "",
  endTime: 1,
  status: false,
};

export const notTaskArr: ITask[] = [notTask];
