import { useQuery } from "@tanstack/react-query";
import { fetchFilms } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { nextPage, prevPage } from "../store/pagination/paginationSlice";
import type { Film } from "../services/types";
import SearchBar from "../components/SearchBar";

interface Props {
  showPagination?: boolean;
  showSearch?: boolean;
}

const Films = ({ showPagination = true, showSearch = true }: Props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const searchQuery = useSelector(
    (state: RootState) => state.pagination.searchQuery
  );

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["films", currentPage, searchQuery],
    queryFn: () => fetchFilms(currentPage, searchQuery),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-60">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {showSearch && <SearchBar />}
      <h1 className="text-2xl font-bold mb-6 text-center">🎬 Popular Films</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.results.map((film: Film) => (
          <div
            key={film.id}
            className="card shadow-md compact bg-base-100 hover:scale-105 transition-transform duration-200"
          >
            <div className="relative">
              {film.adult && (
                <span className="badge badge-error absolute top-2 right-2">
                  18+
                </span>
              )}
            </div>
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                alt={film.title}
                className="rounded-t w-full h-48 object-cover transition-opacity duration-500"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://i.ibb.co/sPY4gqc/no-poster.png";
                }}
              />
            </figure>
            <div className="card-body p-2">
              <h2 className="text-sm font-medium truncate text-center">
                {film.title} ({film.release_date?.split("-")[0]})
              </h2>
            </div>
          </div>
        ))}
      </div>

      {showPagination && (
        <div className="flex justify-center mt-6 gap-2">
          <button
            className="btn btn-sm"
            onClick={() => dispatch(prevPage())}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="btn btn-sm btn-disabled">{currentPage}</span>
          <button
            className="btn btn-sm"
            onClick={() => dispatch(nextPage())}
            disabled={!data || data.page >= data.total_pages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Films;
