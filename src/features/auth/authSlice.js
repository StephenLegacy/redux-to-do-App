import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isGuest: false,
  status: 'idle',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.isGuest = false
    },
    logout: (state) => {
      state.user = null
      state.isGuest = false
    },
    guestLogin: (state) => {
      state.isGuest = true
    }
  }
})

export const { login, logout, guestLogin } = authSlice.actions
export default authSlice.reducer