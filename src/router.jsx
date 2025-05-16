import { createHashRouter, Navigate } from "react-router-dom";
import App from "./App";
import { SearchedList } from "./componenst/Movies/SearchedList";
import { HomePage } from "./pages/HomePage";
import { GenrePage } from "./pages/GenrePage";
import { MoviePage } from "./pages/MoviePage";

export const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Navigate to="/" replace />,
        },
        {
          path: "home",
          element: <HomePage />,
        },
        {
          path: "searched-movies",
          element: <SearchedList />,
        },
        { path: "movie-list", element: <GenrePage /> },
        { path: "movies/:id", element: <MoviePage /> },
      ],
    },
  ],
  {
    basename: "/movie-db",
  }
);
