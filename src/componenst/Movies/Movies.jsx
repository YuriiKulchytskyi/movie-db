import { useEffect } from "react";
import { getPopularMovies } from "../../redux/search/searchOperations";
import { MovieCard } from "./MovieCard";
import css from "./Movies.module.scss";
import { useDispatch, useSelector } from "react-redux";

export const Movies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.search.movies);
  const isLoading = useSelector((state) => state.search.isLoading);

  useEffect(() => {
    if (!movies.length) {
      dispatch(getPopularMovies());
    }
  }, [dispatch, movies.length]);

  const loopedMovies = [...movies, ...movies];

  if (isLoading || !movies.length) {
    return <p className={css.loading}>Loading movies...</p>;
  }

  return (
    <div className={css.wrapper}>
      <div className={css.slider}>
        <div className={css.track}>
          {loopedMovies.map((movie, index) => (
            <div key={`${movie.id}-${index}`} className={css.cardWrapper}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
