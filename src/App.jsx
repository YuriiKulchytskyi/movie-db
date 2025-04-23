import { Link, Outlet } from "react-router-dom";
import "./App.css";


function App() {



  return (
    <>
      <div>
        <ul>
          <Link to="/home">Home</Link>
          {/* <Link to="/movies">Movies</Link> */}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default App;
