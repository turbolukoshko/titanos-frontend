import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MovieList } from "../types";
import { api_url } from "../../consts/api";

interface ListState {
  items: MovieList | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

const initialState: ListState = {
  items: null,
  status: "idle",
  error: null,
};

export const fetchMovieList = createAsyncThunk(
  "movieList/fetchMovies",
  async () => {
    const response = await axios.get(api_url);
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchMovieList.fulfilled, (state, action) => {
      (state.status = "succeeded"), (state.items = action.payload);
    });
    builder.addCase(fetchMovieList.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default movieSlice.reducer;
