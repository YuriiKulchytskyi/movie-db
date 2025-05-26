import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesByGenre } from "../redux/search/searchOperations";
import { setPage } from "../redux/search/searchSlice";
import css from "../componenst/Movies/Movies.module.scss";
import { MovieCard } from "../componenst/Movies/MovieCard";

export const GenrePage = () => {
  const dispatch = useDispatch();

  const { moviesOfGenre, isLoading, page, totalPages, activeGenre } =
    useSelector((state) => state.search);

  useEffect(() => {
    if (activeGenre) {
      dispatch(getMoviesByGenre({ genre: activeGenre, page }));
    }
  }, [dispatch, activeGenre, page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <section className={css.container}>
      {isLoading && <p>Loading...</p>}
      <div className={css.list}>
        {moviesOfGenre.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <div className={css.pagination}>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={handleNextPage} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};
