import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import PokemonPage from "./pages/PokemonPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
