import { ICommentary } from "./commentary";

export interface ITask {
  id: number;
  taskName: string;
  endTime: string;
  description: string;
  status: boolean;
  comments: ICommentary[];
}
