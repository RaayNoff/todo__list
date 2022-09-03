import { IList } from "./models/IList";
import { ITask } from "./models/ITask";

export const noFiltredObject = {
  notSharedLists: [],
  sharedLists: [],
};

export const notList: IList = {
  color: "#fff",
  id: -1,
  listName: " ",
  accessedUsers: [
    {
      email: " ",
    },
  ],
  tasks: [
    {
      id: -1,
      taskName: "",
      status: false,
      description: "",
      comments: [],
      endTime: 1,
    },
  ],
};

export const notTask: ITask = {
  id: 1,
  taskName: " ",
  comments: [],
  description: " ",
  endTime: 1,
  status: false,
};

export const notTaskArr: ITask[] = [notTask];
