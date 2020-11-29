/* eslint-disable camelcase */
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Article } from '@test-project/ui';
import { MovieInformations } from '../types/MovieInformations';
import { selectImageConfiguration } from '../redux/selectors/selectImageConfiguration';

interface MovieInformationsBlockProps {
  infos: MovieInformations;
}

/**
 * Displays movie details.
 */
const MovieInformationsBlock: FC<MovieInformationsBlockProps> = ({ infos }) => {
  const { imageSecureBaseUrl } = useSelector(selectImageConfiguration);
  const { title, original_title, overview, vote_count, vote_average, poster_path } = infos;

  return (
    <Article
      title={`${title} ${title !== original_title ? `(${original_title})` : ''}`}
      imageSource={`${imageSecureBaseUrl}w185${poster_path}`}>
      <p>{overview}</p>
      <p>
        {vote_average}/10 ({vote_count})
      </p>
    </Article>
  );
};

export default MovieInformationsBlock;
