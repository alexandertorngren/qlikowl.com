import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { todoApiSlice } from './todos/todoApiSlice'
import { notificationSlice } from './notifications/notificationSlice'
import { todoSlice } from '@/lib/todos/todoSlice'

const rootReducer = combineSlices(todoSlice, todoApiSlice, notificationSlice)
export type RootState = ReturnType<typeof rootReducer>

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(todoApiSlice.middleware)
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>

export type AppDispatch = AppStore['dispatch']
