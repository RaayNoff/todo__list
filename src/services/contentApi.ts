import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../store/http";
import BackendApi from "../types/classes/BackendApi";
import { IList } from "../types/models/IList";
import { ITask } from "../types/models/ITask";
import { timestamp } from "../types/Timestamp";

interface IAddListArgs {
  listName: string;
  color: string;
}

interface IEditListArgs {
  listName?: string;
  color?: string;
  listId: number;
}

interface IDeleteListArgs {
  listId: number;
}

interface IShareListArgs {
  email: string;
  listId: number;
}

interface IAddTaskArgs {
  taskName: string;
  description: string;
  endTime: timestamp;
  listId: number;
}

interface IEditTaskArgs {
  taskName?: string;
  description?: string;
  status?: boolean;
  taskId: number;
}

interface ICommentTaskArgs {
  userEmail: string;
  content: string;
  taskId: number;
  timestamp: timestamp;
}

interface IDeleteTaskArgs {
  taskId: number;
}

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: baseQueryWithReauth,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  tagTypes: ["Lists", "Tasks"],
  endpoints: (build) => ({
    fetchAllLists: build.query<IList[], number>({
      query: () => ({
        url: BackendApi.FETCH_LISTS,
        method: "GET",
      }),
      providesTags: ["Lists"],
    }),
    fetchListsAdd: build.mutation<string, IAddListArgs>({
      query: ({ color, listName }) => ({
        url: BackendApi.FETCH_LISTS_ADD,
        method: "POST",
        body: {
          listName: listName,
          color: color,
        },
      }),
      invalidatesTags: ["Lists", "Tasks"],
    }),
    fetchListsEdit: build.mutation<string, IEditListArgs>({
      query: ({ color, listName, listId }) => ({
        url: BackendApi.FETCH_LISTS_EDIT + `/${listId}`,
        method: "PUT",
        body: {
          listName: listName,
          color: color,
        },
      }),
      invalidatesTags: ["Lists", "Tasks"],
    }),
    fetchListsDelete: build.mutation<string, IDeleteListArgs>({
      query: ({ listId }) => ({
        url: BackendApi.FETCH_LISTS_DELETE + `/${listId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Lists", "Tasks"],
    }),
    fetchListsShare: build.mutation<string, IShareListArgs>({
      query: ({ email, listId }) => ({
        url: BackendApi.FETCH_LISTS_SHARE + `/${listId}`,
        method: "PUT",
        body: {
          email: email,
        },
      }),
      invalidatesTags: ["Lists", "Tasks"],
    }),
    fetchAllTasks: build.query<ITask[], any>({
      query: () => ({
        url: BackendApi.FETCH_TASKS,
        method: "GET",
      }),
      providesTags: ["Tasks"],
    }),
    fetchTaskAdd: build.mutation<string, IAddTaskArgs>({
      query: ({ description, endTime, listId, taskName }) => ({
        url: BackendApi.FETCH_TASKS_ADD + `/${listId}`,
        method: "POST",
        body: {
          taskName: taskName,
          description: description,
          endTime: endTime,
        },
      }),
      invalidatesTags: ["Tasks", "Lists"],
    }),
    fetchTaskEdit: build.mutation<string, IEditTaskArgs>({
      query: ({ taskId, taskName, description, status }) => ({
        url: BackendApi.FETCH_TASKS_EDIT + `/${taskId}`,
        method: "PUT",
        body: {
          taskName: taskName,
          description: description,
          status: status,
        },
      }),
      invalidatesTags: ["Tasks", "Lists"],
    }),
    fetchTaskComment: build.mutation<string, ICommentTaskArgs>({
      query: ({ userEmail, content, taskId, timestamp }) => ({
        url: BackendApi.FETCH_TASKS_COMMENT + `/${taskId}`,
        method: "POST",
        body: {
          userEmail: userEmail,
          content: content,
          timestamp: timestamp,
        },
      }),
      invalidatesTags: ["Tasks", "Lists"],
    }),
    fetchTaskDelete: build.mutation<string, IDeleteTaskArgs>({
      query: ({ taskId }) => ({
        url: BackendApi.FETCH_TASKS_DELETE + `/${taskId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks", "Lists"],
    }),
  }),
});
