import { IEditListState } from "./IEditListState";
import { IShareListState } from "./IShareListState";
import { ITaskInfoState } from "./ITaskInfoState";

export interface IPopupsState {
  createList: boolean;
  taskInfo: ITaskInfoState;
  shareList: IShareListState;
  editList: IEditListState;
}
