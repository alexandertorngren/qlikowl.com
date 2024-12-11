import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type TodoStatus = 'nan' | 'active' | 'completed'

export interface Todo {
  userId: number
  id: number
  title: string
  status: TodoStatus
  completed: boolean
}

export interface TodoState {
  todos: Todo[]
}

export const todoApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api/todos' }),
  reducerPath: 'todos',

  tagTypes: ['Todos'],
  endpoints: (build) => ({
    apiGetTodos: build.query<TodoStatus, number>({
      query: (_limit = 10) => 'todos?_limit=${limit}',
      providesTags: (_result, _error, id) => [{ type: 'Todos', id }],
    }),

    apiAddTodo: build.mutation<Todo, Todo>({
      query: (todo) => ({
        url: 'todos',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),

    apiRemoveTodo: build.mutation<number, number>({
      query: (id) => ({
        url: `todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
})

export const {
  useApiGetTodosQuery,
  useApiAddTodoMutation,
  useApiRemoveTodoMutation,
  reducer,
} = todoApiSlice
