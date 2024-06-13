import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { routes } from "./routes/routes.tsx";

// const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>
);
