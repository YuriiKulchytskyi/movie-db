import { useSelector } from "react-redux";
import { MovieCard } from "../componenst/Movies/MovieCard";
import css from "../componenst/Movies/Movies.module.scss";


export const GenrePage = () => {

    const genredMovies = useSelector(state => state.search.moviesOfGenre)


  return (
    <ul className={css.list}>
      {genredMovies.map((movie) => (
        <li key={movie.id} className={css.cardWrapper}>
          <MovieCard movie={movie}/>
        </li>
      ))}
    </ul>
  );
};
