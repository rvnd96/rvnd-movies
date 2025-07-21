import type { Film, TvShow, PaginatedResponse } from "./types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const fetchFromTMDB = async <T>(
  endpoint: string,
  params: Record<string, string | number> = {}
): Promise<PaginatedResponse<T>> => {
  const query = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
    ...Object.fromEntries(
      Object.entries(params).filter(([_, v]) => v !== undefined && v !== "")
    ),
  });

  const url = `${BASE_URL}/${endpoint}?${query.toString()}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const fetchFilms = (page = 1, query?: string) => {
  if (query?.trim()) {
    return fetchFromTMDB<Film>("search/movie", { query, page });
  }

  return fetchFromTMDB<Film>("movie/popular", { page });
};

export const fetchTvShows = (page = 1, query?: string) => {
  if (query?.trim()) {
    return fetchFromTMDB<TvShow>("search/tv", { query, page });
  }

  return fetchFromTMDB<TvShow>("tv/popular", { page });
};
