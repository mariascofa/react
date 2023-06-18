import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HOME, SMILE, TODO } from "./constants/routes";
import Smile from "./components/content_components/Smile/Smile";
import Todo from "./components/content_components/Todo/Todo";
import Welcome from "./components/content_components/Welcome/Welcome";

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
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
