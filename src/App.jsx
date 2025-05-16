import { Link, Outlet } from "react-router-dom";
import "./App.css";
import css from "./App.module.scss";
import { MainLoader } from "./componenst/MainLoader/MainLoader";

function App() {



  return (
    <main className={css.appWrapper}>
      <div className={css.contentWrapper}>
        <div className={css.header}>
          <nav className={css.navigationBar}>
            <Link to="/home">Home</Link>
          </nav>
        </div>
        <Outlet />
      </div>

      <MainLoader />
    </main>
  );
}

export default App;
