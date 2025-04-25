import { Link, Outlet } from "react-router-dom";
import "./App.css";
import css from "./App.module.scss"


function App() {



  return (
    <>
      <div className={css.header}>
        <nav className={css.navigationBar}>
          <Link to="/home">Home</Link>
          {/* <Link to="/movies">Movies</Link> */}
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default App;
