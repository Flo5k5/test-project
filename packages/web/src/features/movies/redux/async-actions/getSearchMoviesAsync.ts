import { AppThunk } from '../../../../store';
import { fetchConfiguration, fetchSearchMovies } from '../../api';
import { setImageConfiguration, setLoadingStatus, setMovies } from '../slice';

/**
 * Fetch and store searched movies in the store.
 */
export const getSearchMoviesAsync = (query: string): AppThunk => async (dispatch) => {
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

    const { results } = await fetchSearchMovies(query);

    dispatch(setMovies(results));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  } finally {
    dispatch(setLoadingStatus('idle'));
  }
};
