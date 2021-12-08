import { configureStore } from '@reduxjs/toolkit';

// Slices
import movieSlices from '../modules/home/slice/movieSlice'

export const store = configureStore({
  reducer: {
    movie: movieSlices
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
    serializableCheck: false,
  }),

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
