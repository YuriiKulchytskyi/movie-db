import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Movies } from "./componenst/Movies/Movies";
import { SearchedList } from "./componenst/Movies/SearchedList";
import { HomePage } from "./pages/HomePage";
import { GenrePage } from "./pages/GenrePage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "searched-movies",
          element: <SearchedList />
        },
        {path: "movie-list",
          element: <GenrePage/>
        }
      ],
    },
  ],
  {
    basename: "/movie-db",
  }
);
