import { RootState } from '../../../../store';
import { MovieInformations } from '../../types/MovieInformations';

/**
 * Selector to extract movie informations in moviesStore.
 */
export const selectMovieInformations = (state: RootState): MovieInformations | undefined =>
  state.moviesStore.movieInformations;
