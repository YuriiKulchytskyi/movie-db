import { createSlice } from "@reduxjs/toolkit";
import { getPopularMovies, getSearchedMovies } from "./searchOperations";

const initialState = {
  movies: [],
  searchedMovies: [],
  isLoading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(getSearchedMovies.pending, state => {
        state.isLoading = true;
      }).addCase(getSearchedMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(getSearchedMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchedMovies = action.payload
      })
  },
});

export const searchReducer = searchSlice.reducer
