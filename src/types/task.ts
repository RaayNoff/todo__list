import { ICommentary } from "./commentary";
import { timestamp } from "./timestamp";

export interface ITask {
  id: number;
  taskName: string;
  endTime: timestamp;
  description: string;
  status: boolean;
  comments: ICommentary[];
}
