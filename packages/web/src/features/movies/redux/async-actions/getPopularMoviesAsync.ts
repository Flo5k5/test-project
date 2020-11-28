import { AppThunk } from '../../../../store';
import { fetchConfiguration, fetchPopularMovies } from '../../api';
import { setImageConfiguration, setLoadingStatus, setMovies } from '../slice';

/**
 * Fetch and store popular movies in the store.
 */
export const getPopularMoviesAsync = (page?: string): AppThunk => async (dispatch) => {
  dispatch(setLoadingStatus('pending'));

  try {
    const { images } = await fetchConfiguration();
    // eslint-disable-next-line camelcase
    const { base_url, secure_base_url } = images;

    dispatch(
      setImageConfiguration({
        imageBaseUrl: base_url,
        imageSecureBaseUrl: secure_base_url,
      }),
    );

    const { results } = await fetchPopularMovies(page);

    dispatch(setMovies(results));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  } finally {
    dispatch(setLoadingStatus('idle'));
  }
};
