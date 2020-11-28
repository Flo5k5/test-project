/* eslint-disable camelcase */
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetailsAsync } from '../redux/async-actions/getMovieDetailsAsync';
import { selectLoadingStatus, selectMovieInformations } from '../redux/selectors';
import MovieInformationsBlock from './MovieInformationsBlock';

interface MovieDetailsProps {
  /** Movie id. */
  id: number;
}

/**
 * Fetch and displays movie details.
 */
const MovieDetails: FC<MovieDetailsProps> = ({ id }) => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectLoadingStatus);
  const movieInformations = useSelector(selectMovieInformations);

  useEffect(() => {
    if (id) {
      dispatch(getMovieDetailsAsync(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {loadingStatus === 'pending' && <b>Loading...</b>}
      {loadingStatus === 'idle' && movieInformations && (
        <MovieInformationsBlock infos={movieInformations} />
      )}
    </>
  );
};

export default MovieDetails;
