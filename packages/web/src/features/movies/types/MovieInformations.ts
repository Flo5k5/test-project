/* eslint-disable camelcase */
export interface MovieInformations {
  adult: boolean;
  backdrop_path?: string;
  belongs_to_collection?: Record<string, unknown>;
  budget: number;
  genres: Array<Record<string, unknown>>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: [];
  production_countries: [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<Record<string, unknown>>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
