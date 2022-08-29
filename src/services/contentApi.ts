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
  emailToShare: string;
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
}

interface IDeleteTaskArgs {
  taskId: number;
}

export const contentApi = createApi({
  reducerPath: "contentApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Lists", "Tasks"],
  endpoints: (build) => ({
    fetchAllLists: build.query<IList[], number>({
      query: () => ({
        url: "",
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
        url: BackendApi.FETCH_LISTS_EDIT,
        method: "PUT",
        body: {
          listName: listName,
          color: color,
        },
        params: {
          _id: listId,
        },
      }),
      invalidatesTags: ["Lists", "Tasks"],
    }),
    fetchListsDelete: build.mutation<string, IDeleteListArgs>({
      query: ({ listId }) => ({
        url: BackendApi.FETCH_LISTS_DELETE,
        method: "DELETE",
        params: {
          _id: listId,
        },
      }),
      invalidatesTags: ["Lists", "Tasks"],
    }),
    fetchListsShare: build.mutation<string, IShareListArgs>({
      query: ({ emailToShare, listId }) => ({
        url: BackendApi.FETCH_LISTS_SHARE,
        method: "PUT",
        body: {
          emailToShare: emailToShare,
        },
        params: {
          _id: listId,
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
        url: BackendApi.FETCH_TASKS_ADD,
        method: "POST",
        body: {
          taskName: taskName,
          description: description,
          endTime: endTime,
          listId: listId,
        },
      }),
      invalidatesTags: ["Tasks", "Lists"],
    }),
    fetchTaskEdit: build.mutation<string, IEditTaskArgs>({
      query: ({ taskId, taskName, description, status }) => ({
        url: BackendApi.FETCH_TASKS_EDIT,
        method: "PUT",
        body: {
          taskName: taskName,
          description: description,
          status: status,
        },
        params: {
          _id: taskId,
        },
      }),
      invalidatesTags: ["Tasks", "Lists"],
    }),
    fetchTaskComment: build.mutation<string, ICommentTaskArgs>({
      query: ({ userEmail, content, taskId }) => ({
        url: BackendApi.FETCH_TASKS_COMMENT,
        method: "PUT",
        body: {
          userEmail: userEmail,
          content: content,
        },
        params: {
          _id: taskId,
        },
      }),
      invalidatesTags: ["Tasks", "Lists"],
    }),
    fetchTaskDelete: build.mutation<string, IDeleteTaskArgs>({
      query: ({ taskId }) => ({
        url: BackendApi.FETCH_TASKS_DELETE,
        method: "DELETE",
        params: {
          _id: taskId,
        },
      }),
      invalidatesTags: ["Tasks", "Lists"],
    }),
  }),
});
