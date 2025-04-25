import { useSelector } from "react-redux";
import { MovieCard } from "../componenst/Movies/MovieCard";
import css from "../componenst/Movies/Movies.module.scss";


export const GenrePage = () => {

    const genredMovies = useSelector(state => state.search.moviesOfGenre)


  return (
    <section className={css.list}>
      {genredMovies.map((movie) => (
        <div key={movie.id} className={css.cardWrapper}>
          <MovieCard movie={movie}/>
        </div>
      ))}
    </section>
  );
};
