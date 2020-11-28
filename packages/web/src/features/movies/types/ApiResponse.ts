import { Movie } from './Movie';

/**
 * Interface of response from "/movie/popular" or "/search/movie" TMDB endpoint.
 * https://developers.themoviedb.org/3/movies/get-popular-movies
 * https://developers.themoviedb.org/3/search/search-movies
 */
export interface ApiResponse {
  page: number;
  results: Movie[];
  // eslint-disable-next-line camelcase
  total_pages: number;
  // eslint-disable-next-line camelcase
  total_results: number;
}
