import { IListsState, ListsActionTypes, ListsAction } from "../../types/list";

const initialState: IListsState = {
  error: null,
  lists: [],
  loading: false,
};

const listsReducer = (
  state = initialState,
  action: ListsAction
): IListsState => {
  switch (action.type) {
    case ListsActionTypes.FETCH_LISTS:
      return { ...state, error: null, lists: null, loading: true };

    case ListsActionTypes.FETCH_LISTS_SUCCES:
      return { ...state, error: null, lists: action.payload, loading: false };

    case ListsActionTypes.FETCH_LISTS_ERROR:
      return { ...state, error: action.payload, lists: null, loading: false };

    default:
      return state;
  }
};
export default listsReducer;
