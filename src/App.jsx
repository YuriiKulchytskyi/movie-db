import { Link, Outlet } from "react-router-dom";
import "./App.css";
import css from "./App.module.scss";
import { MainLoader } from "./componenst/MainLoader/MainLoader";
import { Search } from "./componenst/Search/Search";
import { RandomMovieButton } from "./componenst/RandomMovieButton/RandomMovieButton";

function App() {

  return (
    <main className={css.appWrapper}>
      <MainLoader />
      <div className={css.contentWrapper}>
        <div className={css.header}>
          <div className={css.navSearch}>
            <nav className={css.navigationBar}>
              <Link to="/home">Home</Link>
            </nav>
              <RandomMovieButton/>
            <Search />
          </div>
        </div>
        <Outlet />
      </div>

    </main>
  );
}

export default App;
