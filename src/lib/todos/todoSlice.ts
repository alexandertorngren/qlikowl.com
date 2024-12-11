import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

const initialState: TodoState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions

export const selectTodoByStatus = (state: TodoState, status: TodoStatus) =>
  state.todos.filter((todo) => todo.status === status)

export const getTodos = (state: TodoState) => state.todos
