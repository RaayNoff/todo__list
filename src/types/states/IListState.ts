import { IList } from "../models/IList";

export interface IListsState {
  loading: boolean;
  error: string;
  lists: IList[];
}
