import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BackendApi from "../../types/classes/BackendApi";
import { IList } from "../../types/models/IList";

export const fetchLists = createAsyncThunk(
  "list/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IList[]>(BackendApi.FETCH_LISTS);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Неудалось загрузить пользователей");
    }
  }
);
