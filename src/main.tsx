import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AllRoutes } from "./Routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={AllRoutes}></RouterProvider>
  </React.StrictMode>
);
