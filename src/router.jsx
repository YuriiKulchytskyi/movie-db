import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Movies } from "./componenst/Movies/Movies";
import { SearchedList } from "./componenst/Movies/SearchedList";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "movies",
          element: <Movies />,
        },
        {
          path: "searched-movies",
          element: <SearchedList />
        }
      ],
    },
  ],
  {
    basename: "/movie-db",
  }
);
