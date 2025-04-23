import { createSlice } from "@reduxjs/toolkit";
import { getGenres } from "./filterOperations";

const initialState = {
  filter: "",
  genres: [],
  error: null,
  isLoading: false,
  
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.pending, (state) => {
      state.isLoading = true;
    }).addCase(getGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    }).addCase(getGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genres = action.payload
    })
  },
});

export const filterReducer = filterSlice.reducer
