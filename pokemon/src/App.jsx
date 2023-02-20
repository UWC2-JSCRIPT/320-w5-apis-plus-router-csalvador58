import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PokemonPage from "./pages/PokemonPage";
import RootLayout from "./components/RootLayout";
import FavoritesPage from '../src/pages/FavoritesPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/Pokemon",
        element: <PokemonPage />,
      },
      {
        path: "/Pokemon/:id",
        element: <PokemonDetailsPage />,
      },
      {
        path: "/Favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
