import { Link } from 'react-router-dom'
import css from './Movies.module.scss'

export const MovieCard = ({movie}) => {

    const releaseDateFormater = (date) => {
      return date.split('-').reverse().join('.')
    }

    return (
        <div className={css.cardWrapper}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <Link to={`/movies${movie.id}`}>{movie.title}</Link>
            <p>Rate: {movie.vote_average}</p>
            <p>Release date: {releaseDateFormater(movie.release_date)}</p>
        </div>
    )
}