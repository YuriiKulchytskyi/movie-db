import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchedMovies } from "../../redux/search/searchOperations";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const trimmed = search.trim();
  if (!trimmed) return;

  console.log("Пошук:", trimmed);
  dispatch(getSearchedMovies(trimmed));
  navigate("/searched-movies");
  setSearch("");
};


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Search movies..."
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};
