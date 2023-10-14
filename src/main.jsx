import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import AccountantDetails from "./pages/AccountantDetails/AccountantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AccountantDetails/:id",
    element: <AccountantDetails />,
    loader:({params})=> fetch(`http://localhost:5000/charteredAccountants/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);