import { RootState } from '../../../../store';
import { LoadingStatus } from '../../types';

/**
 * Selector to extract loadingStatus in moviesStore.
 */
export const selectLoadingStatus = (state: RootState): LoadingStatus =>
  state.moviesStore.loadingStatus;
