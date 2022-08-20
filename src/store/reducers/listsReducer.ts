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
          endTime: 1660997596,
          status: false,
          comments: [
            {
              id: 1,
              content: "Это увлекательный был! Атракцион!",
              userEmail: "kseniasobchak@gmail.com",
              timestamp: 1660997596,
            },
          ],
        },
        {
          id: 2,
          taskName: "Тестовая задача",
          description: "Это тестовая задача",
          endTime: 1660997596,
          status: true,
          comments: [
            {
              id: 2,
              content: "Это увлекательный был! Атракцион!",
              userEmail: "kseniasobchak@gmail.com",
              timestamp: 1660997596,
            },
          ],
        },
        {
          id: 3,
          taskName: "Тестовая задача",
          description: "Это тестовая задача",
          endTime: 1660997596,
          status: false,
          comments: [
            {
              id: 3,
              content: "Это увлекательный был! Атракцион!",
              userEmail: "kseniasobchak@gmail.com",
              timestamp: 1660997596,
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
