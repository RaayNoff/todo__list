import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import BackendApi from "../types/classes/BackendApi";

export const taskService = createApi({
  reducerPath: "taskService",
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
    }),
  }),
});
