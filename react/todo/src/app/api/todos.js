import { api } from "./api";

const todosApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({ query: () => "/todos/", providesTags: ["Todo"] }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos/",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    completeTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useCompleteTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
