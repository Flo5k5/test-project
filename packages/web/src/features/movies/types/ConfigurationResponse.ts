/* eslint-disable camelcase */
import { BackdropSizes } from './BackdropSizes';
import { PosterSizes } from './PosterSizes';

/**
 * Interface of response from "/configuration" TMDB endpoint.
 * https://developers.themoviedb.org/3/configuration/get-api-configuration
 */
export interface ConfigurationResponse {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: BackdropSizes[];
    logo_sizes: string[];
    poster_sizes: PosterSizes[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
}
