import { RootState } from '../../../../store';
import { ImageConfiguration } from '../../types/ImageConfiguration';

/**
 * Selector to extract image configuration in moviesStore.
 */
export const selectImageConfiguration = (state: RootState): ImageConfiguration =>
  state.moviesStore.imageConfiguration;
