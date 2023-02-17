import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Characters from "./components/Characters";
import HomePage from "./components/HomePage";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {},
      {}
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
