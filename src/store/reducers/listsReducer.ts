import { IColor } from "../../types/color";
import {
  IListsState,
  ListsActionTypes,
  ListsAction,
  IList,
} from "../../types/list";

const initialState: IListsState = {
  error: null,
  lists: [
    {
      id: 1,
      listName: "Тестовый список",
      colors: { value: "purple", label: "Фиолетовый", color: "#553fdb" },
      tasks: [
        {
          id: 1,
          taskName: "Тестовая задача",
          description: "Это тестовая задача",
          endTime: "23.05.2022",
          status: false,
          comments: [
            {
              id: 1,
              content: "Это увлекательный был! Атракцион!",
              userEmail: "kseniasobchak@gmail.com",
            },
          ],
        },
      ],
    },
  ],
  loading: false,
};

const listsReducer = (
  state = initialState,
  action: ListsAction
): IListsState => {
  switch (action.type) {
    case ListsActionTypes.FETCH_LISTS:
      return { ...state, error: null, lists: [], loading: true };

    case ListsActionTypes.FETCH_LISTS_SUCCESS:
      return { ...state, error: null, lists: action.payload, loading: false };

    case ListsActionTypes.FETCH_LISTS_ERROR:
      return { ...state, error: action.payload, lists: [], loading: false };

    default:
      return state;
  }
};
export default listsReducer;
