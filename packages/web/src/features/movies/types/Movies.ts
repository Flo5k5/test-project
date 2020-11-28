import { Movie } from './Movie';

export interface Movies {
  entities: Record<number, Movie>;
  list: number[];
}
