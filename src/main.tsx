import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Footer";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: (
      <PageWrapper title="Galéria">
        <Gallery />
      </PageWrapper>
    ),
  },
  {
    path: "/contact",
    element: (
      <PageWrapper title="Kapcsolat">
        <Contact />
      </PageWrapper>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
);
