import { RootState } from '../../../../store';
import { Movie } from '../../types/Movie';

/**
 * Selector to extract movies array in moviesStore.
 */
export const selectMovies = (state: RootState): Movie[] => state.moviesStore.movies;
