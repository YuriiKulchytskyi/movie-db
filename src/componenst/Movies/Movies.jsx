import { useEffect } from "react";
import { getPopularMovies } from "../../redux/search/searchOperations";
import { MovieCard } from "./MovieCard";
import css from './Movies.module.scss'
import { useDispatch, useSelector } from "react-redux";


export const Movies = () => {
    const dispatch = useDispatch()

    const popularMovies = useSelector((state) => state.search.movies)
  
    useEffect(() => {
      dispatch(getPopularMovies())
  
    }, [dispatch])

  return (
    <ul className={css.list}>
      {popularMovies.map(movie => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  );
};
