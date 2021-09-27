import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    movieCheck: false,
    tvCheck: false,
    popularCheck: false,
  },
  reducers: {
    movieC: (state, action) => {
      state.movieCheck = action.payload;
    },
    tvC: (state, action) => {
      state.tvCheck = action.payload;
    },
    popularC: (state, action) => {
      state.popularCheck = action.payload;
    },
  },
});

export const { movieC, tvC, popularC } = navbarSlice.actions;
export const selectMovie = (state) => state.navbar.movieCheck;
export const selectTv = (state) => state.navbar.tvCheck;
export const selectPopular = (state) => state.navbar.popularCheck;

export default navbarSlice.reducer;
