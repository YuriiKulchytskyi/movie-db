import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../redux/search/searchOperations";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

export const RandomMovieButton = () => {
    const [movie, setMovie] = useState()

    const getSearchedMovie = useSelector((state) => state.search.movie)
    useEffect(() => {
        if(!getSearchedMovie) return

        setMovie(getSearchedMovie)
        console.log(movie);
        
    }, [getSearchedMovie])



  const dispatch = useDispatch();
  const navigate = useNavigate();

  const randomId = () => {
    return Math.round(Math.random() * 1000000);
  };



  const handleRandomMovie = () => {
    const id = randomId();
    dispatch(getMovieById(id));
    navigate(`/movies/${id}`);
  };

  return <button onClick={handleRandomMovie}>Get random movie</button>;
};
