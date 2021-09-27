import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    verified: false
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    verify: (state, action) => {
      state.verified = action.payload;
    }
  },
});

export const { login, logout, verify } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectVerification = (state) => state.user.verified;

export default userSlice.reducer;