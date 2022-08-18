import axios from "axios";
import { AnyAction, Dispatch } from "redux";
import { ListsAction, ListsActionTypes } from "../../types/list";
import BackendApi from "../../types/urls";

export const fetchLists = (userId: string) => {
  return async (dispatch: Dispatch<ListsAction | AnyAction>) => {
    try {
      dispatch({ type: ListsActionTypes.FETCH_LISTS });

      const response = await axios.get(BackendApi.FETCH_LISTS);

      dispatch({
        type: ListsActionTypes.FETCH_LISTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ListsActionTypes.FETCH_LISTS_ERROR,
        payload: "Запрос на получение списков дел не был обработан",
      });
    }
  };
};
