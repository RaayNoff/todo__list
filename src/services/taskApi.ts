import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BackendApi from "../types/classes/BackendApi";

interface IChangeStatusАrgs {
  id: number;
  status: boolean;
  gavno?: string;
}

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BackendApi.LOCATION,
  }),
  tagTypes: ["Tasks"],
  endpoints: (build) => ({
    addTask: build.mutation<any, any>({
      query: (taskTitle: string, taskDescription: string = "") => ({
        url: BackendApi.TASK,
        method: "POST",
        body: {
          taskTitle,
          taskDescription,
        },
      }),
      invalidatesTags: ["Tasks"],
    }),
    changeStatus: build.mutation<any, IChangeStatusАrgs>({
      query: ({ id, status, gavno }) => ({
        url: BackendApi.TASK,
        method: "PUT",
        body: {
          _id: id,
          _status: status,
        },
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});
