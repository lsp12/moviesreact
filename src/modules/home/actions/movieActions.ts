import { createAsyncThunk } from "@reduxjs/toolkit";
import * as moviesService from '../services/moviesService';

export const getMovies = createAsyncThunk(
  'movie/getMovies', async () => {
    try {
      const res = await moviesService.getMovies();
      return res.data;
    } catch ( error ) {
      console.log( error );
    }
  },
);