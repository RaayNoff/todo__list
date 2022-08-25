import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IList } from "../../types/models/IList";
import { IListsState } from "../../types/states/IListState";
import { fetchLists } from "../action-creators/list";

const initialState: IListsState = {
  error: "",
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

export const ListSlice = createSlice({
  name: "list",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchLists.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchLists.fulfilled.type]: (state, action: PayloadAction<IList[]>) => {
      state.loading = false;
      state.lists = action.payload;
    },
    [fetchLists.rejected.type]: (state) => {
      state.loading = false;
      state.error = "Неудалось загрузить списки задач";
    },
  },
});

export default ListSlice.reducer;