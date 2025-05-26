import { useDispatch, useSelector } from "react-redux";
import { getMovieById } from "../../redux/search/searchOperations";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


export const RandomMovieButton = () => {
  const [movie, setMovie] = useState();
  const [count, setCount] = useState(3);

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    let interval;

    if (disabled) {
      interval = setInterval(() => {
        setCount((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setDisabled(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [disabled]);

  // useEffect(() =>{
  //   const timeout = setTimeout(() => {
  //       setDisabled(false)
  //   }, 3000);

  //   return () => clearTimeout(timeout)
  // }, [])

  const getSearchedMovie = useSelector((state) => state.search.movie);
  useEffect(() => {
    if (!getSearchedMovie) return;

    setMovie(getSearchedMovie);
    console.log(movie);
  }, [getSearchedMovie]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const randomId = () => {
    return Math.round(Math.random() * 1000000);
  };

  const handleRandomMovie = () => {
    setDisabled(true);
    setCount(3);

    const id = randomId();
    dispatch(getMovieById(id));
    navigate(`/movies/${id}`);

    // setTimeout(() => setDisabled(false), 3000);
  };

  return (
    <button onClick={handleRandomMovie} disabled={disabled}>
      {disabled ? `Wait ${count}s...` : "Get random movie"}
    </button>
  );
};
