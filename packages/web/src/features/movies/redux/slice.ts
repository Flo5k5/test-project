/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingStatus } from '../types/LoadingStatus';
import { Movie } from '../types/Movie';
import { MoviesState } from '../types/MoviesState';
import { ImageConfiguration } from '../types/ImageConfiguration';
import { MovieInformations } from '../types/MovieInformations';

const initialState: MoviesState = {
  imageConfiguration: {
    imageBaseUrl: '',
    imageSecureBaseUrl: '',
  },
  loadingStatus: 'idle',
  movies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setLoadingStatus: (state, { payload }: PayloadAction<LoadingStatus>) => {
      state.loadingStatus = payload;
    },
    setMovieInformations: (state, { payload }: PayloadAction<MovieInformations | undefined>) => {
      state.movieInformations = payload;
    },
    setMovies: (state, { payload }: PayloadAction<Movie[]>) => {
      state.movies = [...payload];
    },
    setImageConfiguration: (state, { payload }: PayloadAction<ImageConfiguration>) => {
      state.imageConfiguration = {
        ...payload,
      };
    },
  },
});

export const {
  setImageConfiguration,
  setLoadingStatus,
  setMovieInformations,
  setMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
