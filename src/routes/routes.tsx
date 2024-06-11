import { Navigate } from "react-router-dom";
import NewNote from "../components/NewNote";

export const routes = [
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/new",
    element: <NewNote />,
  },
  {
    path: "/:id",
    children: [
      {
        index: true,
        element: <h1>Show</h1>,
      },
      {
        path: "edit",
        element: <h1>Edit</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
