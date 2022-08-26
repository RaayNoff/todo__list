import { HomeContentDisplaying } from "../enums/HomeContentDisplaying";
import { ITask } from "../models/ITask";

export interface IHomeContentState {
  nowDisplaying: HomeContentDisplaying;
  listId: number;
}
