import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { Movies } from "./componenst/Movies/Movies";
import { Search } from "./componenst/Search/Search";

function App() {
  return (
    <>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </ul>
        <Search />
      </div>
      <Outlet />
    </>
  );
}

export default App;
