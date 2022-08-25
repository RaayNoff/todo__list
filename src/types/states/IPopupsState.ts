import { IShareListState } from "./IShareListState";

export interface IPopupsState {
  createList: boolean;
  listInfo: boolean;
  shareList: IShareListState;
}
