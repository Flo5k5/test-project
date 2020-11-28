import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from './features/movies/redux/slice';

export const store = configureStore({
  reducer: {
    moviesStore: moviesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
