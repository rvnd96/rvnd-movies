export interface Film {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  adult?: boolean;
}

export interface TvShow {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  first_air_date: string;
  adult?: boolean;
}

export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
