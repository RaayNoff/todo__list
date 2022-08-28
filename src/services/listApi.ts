import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BackendApi from "../types/classes/BackendApi";
import { IList } from "../types/models/IList";

interface IAddListArgs {
  listName: string;
  color: string;
}
interface IShareListArgs {
  email: string;
  listId: number;
}

export const listApi = createApi({
  reducerPath: "listApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BackendApi.LOCATION,
    prepareHeaders: (headers, {}) => {
      headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);

      return headers;
    },
  }),

  tagTypes: ["Lists"],
  endpoints: (build) => ({
    deleteList: build.mutation<any, any>({
      query: (id: number) => ({
        url: BackendApi.LIST,
        method: "DELETE",
        params: {
          _id: id,
        },
      }),
    }),
    addList: build.mutation<any, IAddListArgs>({
      query: ({ listName, color }) => ({
        url: BackendApi.LIST,
        method: "POST",
        body: {
          listName: listName,
          color: color,
        },
      }),
    }),
    shareList: build.mutation<any, IShareListArgs>({
      query: ({ email, listId }) => ({
        url: BackendApi.LIST,
        method: "PUT",
        params: {
          _id: listId,
          _email: email,
        },
      }),
    }),
  }),
});
