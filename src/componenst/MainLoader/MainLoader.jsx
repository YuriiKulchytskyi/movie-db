import { Link } from "react-router-dom"
import css from "../../App.module.scss"

export const MainLoader = () => {
  return (
    <div className={css.cinemaWrapper}>
        <div className={css.insideBox}>
          <h1>Lights. Camera. Action!</h1>
        </div>
        <Link to='/home' className={css.container}>
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
        </Link>
      </div>
  )
}
