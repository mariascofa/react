import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HOME, SMILE, TODO, ALBUMS } from "./constants/routes";
import Smile from "./pages/Smile/Smile";
import Todo from "./pages/Todo/Todo";
import Welcome from "./pages/Welcome/Welcome";
import Albums from "./pages/Albums/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: HOME,
        element: <Welcome />,
      },
      {
        path: SMILE,
        element: <Smile />,
      },
      {
        path: TODO,
        element: <Todo />,
      },
      {
        path: ALBUMS,
        element: <Albums />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
