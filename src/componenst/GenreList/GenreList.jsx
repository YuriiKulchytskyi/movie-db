import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../redux/filter/filterOperations";
import { Link, useNavigate } from "react-router-dom";
import css from "./Genrelist.module.scss";
import { setActiveGenre, setPage } from "../../redux/search/searchSlice";

export const GenreList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);



  const handleCheckListOfMoviesByGenre = (id) => {
    dispatch(setActiveGenre(id));
    dispatch(setPage(1)); 
    navigate("/movie-list");
  };
  

  const genreList = useSelector((state) => state.filter.genres);

  return (
    <ul className={css.genreList}>
      {genreList.map((genre) => (
        <li key={genre.id}>
          <Link onClick={() => handleCheckListOfMoviesByGenre(genre.id)}>
            {genre.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
