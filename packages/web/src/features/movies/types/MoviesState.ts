import { LoadingStatus } from './LoadingStatus';
import { Movie } from './Movie';
import { ImageConfiguration } from './ImageConfiguration';
import { MovieInformations } from './MovieInformations';

export interface MoviesState {
  imageConfiguration: ImageConfiguration;
  loadingStatus: LoadingStatus;
  movies: Movie[];
  movieInformations?: MovieInformations;
}
