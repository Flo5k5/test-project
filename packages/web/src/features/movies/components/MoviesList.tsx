import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { CardList, CardListItem, SearchBar } from '@test-project/ui';

import { useHistory } from 'react-router-dom';
import { PosterSizes } from '../types/PosterSizes';

import { getPopularMoviesAsync } from '../redux/async-actions/getPopularMoviesAsync';
import { getSearchMoviesAsync } from '../redux/async-actions/getSearchMoviesAsync';

import { selectMovies } from '../redux/selectors/selectMovies';
import { selectLoadingStatus } from '../redux/selectors/selectLoadingStatus';
import { selectImageConfiguration } from '../redux/selectors/selectImageConfiguration';

/**
 * Debounce time for the search bar.
 */
const DEBOUNCE_TIME = 500;

/**
 * The placeholder of the search bar.
 */
const SEARCHBAR_PLACEHOLDER = 'Rechercher un film';

interface MoviesListProps {
  /**
   * Size of the movie's poster.
   */
  imageSize?: PosterSizes;
}

/**
 * Displays a list of popular movies and a search bar to fetch movies.
 */
const MoviesList: FC<MoviesListProps> = ({ imageSize = 'w185' }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const movies = useSelector(selectMovies);
  const loadingStatus = useSelector(selectLoadingStatus);
  const { imageBaseUrl } = useSelector(selectImageConfiguration);

  const [query, setQuery] = useState<string>();

  useEffect(() => {
    if (!query) {
      dispatch(getPopularMoviesAsync());
    }
  }, [dispatch, query]);

  /**
   * Debounce the call to search movies to prevent spam and offer a better user experience.
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceQuery = useCallback(
    debounce((value: string) => {
      if (value) {
        dispatch(getSearchMoviesAsync(value));
      }
    }, DEBOUNCE_TIME),
    [dispatch],
  );

  /**
   * Handles the changes value of the search bar to fetch movies.
   *
   * @param value Search query.
   */
  const onSearchChange = useCallback(
    (value: string) => {
      setQuery(value);
      debounceQuery(value);
    },
    [debounceQuery],
  );

  /**
   * Handles click on a movie card to redirect to movie details.
   *
   * @param id Movie id.
   */
  const onCardClick = (id?: number) => {
    if (id) {
      history.push(`/movie/${id}`);
    }
  };

  // eslint-disable-next-line camelcase
  const items: CardListItem[] = movies.map(({ id, poster_path, title }) => ({
    id,
    // eslint-disable-next-line camelcase
    imageSource: `${imageBaseUrl}${imageSize}${poster_path}`,
    title,
  }));

  return (
    <>
      <SearchBar placeholder={SEARCHBAR_PLACEHOLDER} onChange={onSearchChange} />
      {loadingStatus === 'idle' && <CardList items={items} onCardClick={onCardClick} />}
    </>
  );
};

export default MoviesList;
