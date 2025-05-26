import { Link, Outlet } from "react-router-dom";
import "./App.css";
import css from "./App.module.scss";
import { MainLoader } from "./componenst/MainLoader/MainLoader";
import { Search } from "./componenst/Search/Search";
import { RandomMovieButton } from "./componenst/RandomMovieButton/RandomMovieButton";
import { useEffect, useState } from "react";

function App() {
  const [disabled, setDisabled] = useState(true)

  useEffect(() =>{
    const timeout = setTimeout(() => {
        setDisabled(false)
    }, 3000);

    return () => clearTimeout(timeout)
  }, [])
  return (
    <main className={css.appWrapper}>
      <MainLoader />
      <div className={css.contentWrapper}>
        <div className={css.header}>
          <div className={css.navSearch}>
            <nav className={css.navigationBar}>
              <Link to="/home">Home</Link>
            </nav>
              <RandomMovieButton disabled={disabled}/>
            <Search />
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
