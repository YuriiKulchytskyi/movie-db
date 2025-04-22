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
        headers:{
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            accept: 'application/json'
        }
      });
      //
      // console.log(response.data.results);
      //
      return response.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearchedMovies = createAsyncThunk(
  'search/getSearchedMovies',
  async(data, thunkAPI) => {
    try {
        const response = await axios.get(`/search/movie?query=${data}`,{
          headers:{
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            accept: 'application/json'
          }
        })
        return response.data.results
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
