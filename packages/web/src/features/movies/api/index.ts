import { TMDB_API_BASE_URL, TMDB_API_KEY } from '../constants';
import { ConfigurationResponse, ApiResponse, MovieInformations } from '../types';
import { buildUrlWithParams } from '../utils';

/**
 * Basic GET method to fetch endpoint from TMDB API.
 *
 * @param {string} endpoint
 * @param {Record<string, string>} [params]
 * @returns {Promise<Response>}
 */
const makeAuthenticatedGetRequest = <T>(
  endpoint: string,
  params?: Record<string, string>,
): Promise<T> => {
  const url = buildUrlWithParams({
    baseUrl: `${TMDB_API_BASE_URL}${endpoint}`,
    params: { api_key: TMDB_API_KEY, ...params },
  });

  return fetch(url).then((res: Response) => res.json());
};

/**
 * Get the system wide configuration information.
 * https://developers.themoviedb.org/3/configuration/get-api-configuration
 *
 * @returns {Promise<ApiConfiguration>}
 */
export const fetchConfiguration = (): Promise<ConfigurationResponse> =>
  makeAuthenticatedGetRequest<ConfigurationResponse>('configuration');

/**
 * Get a list of the current popular movies on TMDb. This list updates daily.
 * https://developers.themoviedb.org/3/movies/get-popular-movies
 *
 * @param {string} [page="1"]
 * @returns {Promise<ApiResponse>} Response
 */
export const fetchPopularMovies = (page = '1'): Promise<ApiResponse> =>
  makeAuthenticatedGetRequest<ApiResponse>('movie/popular', { page });

/**
 * Search for movies.
 * https://developers.themoviedb.org/3/search/search-movies
 *
 * @param {string} query
 * @returns {Promise<ApiResponse>} Response
 */
export const fetchSearchMovies = (query: string): Promise<ApiResponse> =>
  makeAuthenticatedGetRequest<ApiResponse>('search/movie', {
    query,
  });

/**
 * Get the primary information about a movie.
 * https://developers.themoviedb.org/3/movies/get-movie-details
 *
 * @param {number} id
 * @returns {Promise<MovieInformations>}
 */
export const fetchMovieDetails = (id: number): Promise<MovieInformations> =>
  makeAuthenticatedGetRequest<MovieInformations>(`movie/${id}`);
