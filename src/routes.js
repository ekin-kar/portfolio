import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Project from "./pages/Project";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects/:id",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

export default router;
