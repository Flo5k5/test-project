import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import MovieDetails from '../movies/components/MovieDetails';

interface MovieDetailsRouteParams {
  movieId: string;
}

const Movie: FC = () => {
  const { movieId } = useParams<MovieDetailsRouteParams>();

  return <MovieDetails id={+movieId} />;
};

export default Movie;
