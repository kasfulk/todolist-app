import { configureStore } from '@reduxjs/toolkit'
import TodoListReducer from './features/todo-list/slice'

export const store = configureStore({
  reducer: {
    todoList: TodoListReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
