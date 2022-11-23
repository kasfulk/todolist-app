import { createSlice } from '@reduxjs/toolkit'
import { TodoList } from '@/types/todo-list'
import { RootState } from '@/store/store'

const initialState: TodoList[] = []

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodoList: (state, actions) => {
      return [...state, actions.payload]
    },
    deleteTodoList: (state, actions) => {
      const { payload } = actions
      return state.filter((value) => value.id !== payload.id)
    },
    editTodoList: (state, actions) => {
      const { payload } = actions
      const editedIndex = state.findIndex((value) => value.id === payload.id)
      state[editedIndex] = payload
      return state
    },
  },
})

export const getAllTodoList = (state: RootState) => state.todoList
export const { addTodoList, deleteTodoList, editTodoList } =
  todoListSlice.actions

export default todoListSlice.reducer
