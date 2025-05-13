import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  tasks: [],
  filter: 'all',
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        description: action.payload,
        isDone: false,
      }
      state.tasks.push(newTask)
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload)
      if (task) {
        task.isDone = !task.isDone
      }
    },
    editTask: (state, action) => {
      const { id, description } = action.payload
      const task = state.tasks.find(t => t.id === id)
      if (task) {
        task.description = description
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload)
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    }
  }
})

export const { addTask, toggleTask, editTask, deleteTask, setFilter } = todoSlice.actions
export default todoSlice.reducer