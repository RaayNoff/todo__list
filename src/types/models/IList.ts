import { IColor } from "./IColor";
import { ITask } from "./ITask";

export interface IList {
  id: number;
  listName: string;
  colors: IColor;
  tasks: ITask[];
}
