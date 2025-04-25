import { createSlice } from "@reduxjs/toolkit";
import {
  getMovieById,
  getMoviesByGenre,
  getPopularMovies,
  getSearchedMovies,
} from "./searchOperations";

const initialState = {
  movies: [],
  searchedMovies: [],
  isLoading: false,
  error: null,
  moviesOfGenre: [],
  movie: null,
  page: 1,
  totalPages: null,
  activeGenre: null, 
};


const setPending = (state) => {
  state.isLoading = true;
};

const setRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setActiveGenre(state, action) {
      state.activeGenre = action.payload;
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, setPending)
      .addCase(getPopularMovies.rejected, setRejected)
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(getSearchedMovies.pending, setPending)
      .addCase(getSearchedMovies.rejected, setRejected)
      .addCase(getSearchedMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchedMovies = action.payload;
      })
      .addCase(getMoviesByGenre.pending, setPending)
      .addCase(getMoviesByGenre.rejected, setRejected)
      .addCase(getMoviesByGenre.fulfilled, (state, action) => {
        state.isLoading = false;
        state.moviesOfGenre = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(getMovieById.pending, setPending)
      .addCase(getMovieById.rejected, setRejected)
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movie = action.payload;
      });
  },
});

export const searchReducer = searchSlice.reducer;
export const { setPage, setActiveGenre } = searchSlice.actions;
