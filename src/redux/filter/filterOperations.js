import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const getGenres = createAsyncThunk(
  "search/getGenres",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          accept: "application/json",
        },
      });
      return response.data.genres;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);




