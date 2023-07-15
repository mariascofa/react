import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HOME, SMILE, TODO, USERS, CONTACTS } from "./constants/routes";
import Smile from "./pages/Smile/Smile";
import Todo from "./pages/Todo/Todo";
import Welcome from "./pages/Welcome/Welcome";
import Users from "./pages/Users/Users";
import Contacts from "./pages/Contacts/Contacts";

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
        path: USERS,
        element: <Users />,
      },
      {
        path: CONTACTS,
        element: <Contacts />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
