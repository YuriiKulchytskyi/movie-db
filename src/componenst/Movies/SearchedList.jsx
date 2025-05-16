import { useSelector } from "react-redux";
import { MovieCard } from "./MovieCard";
import css from "./Movies.module.scss";
import { useEffect } from "react";

export const SearchedList = () => {
  const { searchedMovies, isLoading } = useSelector((state) => state.search);
  useEffect(() => {
    console.log(searchedMovies);
    
  }, [searchedMovies])


  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <ul className={css.list}>
        {searchedMovies.length > 0 ? (searchedMovies.map((movie) => (
          <li key={movie.id} className={css.cardWrapper}>
            <MovieCard movie={movie} />
          </li>)
        )) : <p>No matches...</p>}
      </ul>
    </div>
  );
};
