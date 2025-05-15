import { Link, Outlet } from "react-router-dom";
import "./App.css";
import css from "./App.module.scss";

function App() {
  return (
    <>
      {/* <div className={css.header}>
        <nav className={css.navigationBar}>
          <Link to="/home">Home</Link>
        </nav>
      </div>
      <Outlet /> */}

      <div className={css.cinemaWrapper}>
            <div className={css.insideBox}>
              <h1>Hello</h1>
            </div>
        <div className={css.container}>
          <div className={css.boxWrapper}>
          <ul className={css.cap}>
            <li className={css.blackNWhite}></li>
            <li className={css.blackNWhite}></li>
            <li className={css.blackNWhite}></li>
            <li className={css.blackNWhite}></li>
            <li className={css.blackNWhite}></li>
            <li className={css.blackNWhite}></li>
          </ul>
          <div className={css.box}>
            <ul className={css.capBot}>
              <li className={css.blackNWhite}></li>
              <li className={css.blackNWhite}></li>
              <li className={css.blackNWhite}></li>
              <li className={css.blackNWhite}></li>
              <li className={css.blackNWhite}></li>
              <li className={css.blackNWhite}></li>
            </ul>
            <div className={css.circle}>
              <div className={css.rotatingCircle}>
                <div className={css.triangle}></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
