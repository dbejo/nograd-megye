import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PageWrapper from "./components/PageWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact",
    element: (
      <PageWrapper>
        <Contact />
      </PageWrapper>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
