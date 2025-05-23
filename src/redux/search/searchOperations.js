import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const getPopularMovies = createAsyncThunk(
  "search/getPopularMovies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/movie/popular`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          accept: "application/json",
        },
      });
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearchedMovies = createAsyncThunk(
  "search/getSearchedMovies",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`/search/movie?query=${data}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          accept: "application/json",
        },
      });
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getGenres = createAsyncThunk(
  "search/getGenres",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`/genre/movie/list`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          accept: "application/json",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMoviesByGenre = createAsyncThunk(
  "search/getMoviesByGenre",
  async ({ genre, page }, thunkAPI) => {
    try {
      const response = await axios.get(`/discover/movie?with_genres=${genre}&page=${page}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          accept: "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const getMovieById = createAsyncThunk(
  "search/getMovieById",
  async(id, thunkAPI) => {
    try {
      const response = await axios.get(`/movie/${id}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          accept: "application/json",
        },
      })
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);
