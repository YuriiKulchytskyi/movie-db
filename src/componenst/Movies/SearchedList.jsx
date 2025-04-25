import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import css from "./Movies.module.scss";

export const SearchedList = () => {
  const { searchedMovies, isLoading } = useSelector((state) => state.search);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <ul className={css.list}>
        {searchedMovies.map((movie) => (
          <li key={movie.id} className={css.cardWrapper}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};
