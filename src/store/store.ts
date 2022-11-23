import { configureStore } from '@reduxjs/toolkit'
import TodoListReducer from './features/todo-list/slice'
import TitleReducer from './features/title/slice'

export const store = configureStore({
  reducer: {
    todoList: TodoListReducer,
    title: TitleReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
