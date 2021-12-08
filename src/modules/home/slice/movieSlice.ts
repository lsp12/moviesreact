import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from '../actions/movieActions';
import { IMovie } from '../interface';

interface State {
  loading: boolean;
  error?: string;
  moviesList?: IMovie[];
}

const initialState: State = {
  loading: false,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( getMovies.pending, ( state ) => {
        state.loading = true;
      })
      .addCase( getMovies.fulfilled, ( state, action ) => {
        state.loading = false;
        state.moviesList = action.payload;
      })
      .addCase( getMovies.rejected, ( state ) => {
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;
