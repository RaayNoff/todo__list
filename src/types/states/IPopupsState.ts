import { IShareListState } from "./IShareListState";
import { ITaskInfoState } from "./ITaskInfoState";

export interface IPopupsState {
  createList: boolean;
  taskInfo: ITaskInfoState;
  shareList: IShareListState;
}
