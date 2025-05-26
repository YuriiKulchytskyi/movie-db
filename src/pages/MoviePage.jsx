import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../redux/search/searchOperations";
import { FaArrowCircleLeft } from "react-icons/fa";
import css from "./Pages.module.scss";
import { Loader } from "../componenst/Loader/Loader";

export const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const formatDate = (dateStr) => {
    return dateStr.split("-").reverse().join(".");
  };

  const movie = useSelector((state) => state.search.movie);
  const isLoading = useSelector((state) => state.search.isLoading);
  const error = useSelector((state) => state.search.error);

  useEffect(() => {
    dispatch(getMovieById(id));
  }, [dispatch, id]);


  if (error) return <p>{error}</p>;
  if (!movie) return <p>Movie not found</p>;

  const backLinkHref = location.state?.from || "/home";

  return (
    <div style={{position: "relative"}}>
    {/* {isLoading ? <Loader/> :  */}
      <div
        className={css.wrapper}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <Link to={backLinkHref}>
          <button className={css.backBtn}>{<FaArrowCircleLeft />}</button>
        </Link>
  
        <div className={css.poster}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
  
        <div className={css.info}>
          <h1>{movie.title}</h1>
          <p className={css.tagline}>{movie.tagline}</p>
  
          <ul className={css.meta}>
            <li>
              <strong>Rate:</strong> {movie.vote_average} ⭐ ({movie.vote_count}{" "}
              голосів)
            </li>
            <li>
              <strong>Genre:</strong> {movie.genres.map((g) => g.name).join(", ")}
            </li>
            <li>
              <strong>Release date:</strong> {formatDate(movie.release_date)}
            </li>
            <li>
              <strong>Language:</strong>{" "}
              {movie.spoken_languages.map((l) => l.english_name).join(", ")}
            </li>
            <li>
              <strong>Duration:</strong> {movie.runtime} хв
            </li>
            <li>
              <strong>Country:</strong>{" "}
              {movie.production_countries.map((c) => c.name).join(", ")}
            </li>
            <li>
              <strong>Status:</strong> {movie.status}
            </li>
          </ul>
  
          <p className={css.overview}>
            <strong>Опис:</strong> {movie.overview}
          </p>
  
          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className={css.button}
            >
              Visit official website
            </a>
          )}
        </div>
      </div>
      {/* } */}
      </div>
  );
};
