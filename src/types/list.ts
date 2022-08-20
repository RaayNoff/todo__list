import { IColor } from "./color";
import { ITask } from "./task";

export interface IListsState {
  loading: boolean;
  error: null | string;
  lists: IList[];
}

export interface IList {
  id: number;
  listName: string;
  colors: IColor;
  tasks: ITask[];
}

export enum ListsActionTypes {
  FETCH_LISTS = "FETCH_LISTS",
  FETCH_LISTS_SUCCESS = "FETCH_LISTS_SUCCESS",
  FETCH_LISTS_ERROR = "FETCH_LISTS_ERROR",
}

interface IFetchLists {
  type: ListsActionTypes.FETCH_LISTS;
}

interface IFetchListSuccess {
  type: ListsActionTypes.FETCH_LISTS_SUCCESS;
  payload: IList[]; //json
}

interface IFetchListsError {
  type: ListsActionTypes.FETCH_LISTS_ERROR;
  payload: string;
}

export type ListsAction = IFetchLists | IFetchListSuccess | IFetchListsError;
