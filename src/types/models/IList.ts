import { IColor } from "./IColor";
import { ITask } from "./ITask";
import { IUser } from "./IUser";

export interface IList {
  id: number;
  listName: string;
  color: string;
  tasks: ITask[];
  accessedUsers: IUser[];
}
