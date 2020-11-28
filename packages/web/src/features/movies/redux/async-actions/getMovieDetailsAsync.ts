import { AppThunk } from '../../../../store';
import { fetchConfiguration, fetchMovieDetails } from '../../api';
import { setImageConfiguration, setLoadingStatus, setMovieInformations } from '../slice';

/**
 * Fetch and store movie details in the store.
 */
export const getMovieDetailsAsync = (id: number): AppThunk => async (dispatch) => {
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

    dispatch(setMovieInformations());

    const movieInformations = await fetchMovieDetails(id);

    dispatch(setMovieInformations(movieInformations));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  } finally {
    dispatch(setLoadingStatus('idle'));
  }
};
