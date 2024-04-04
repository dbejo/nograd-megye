import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PageWrapper from "./components/PageWrapper";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/nograd-megye/",
    element: <Home />,
    children: [
      {
        path: "/nograd-megye/gallery",
        element: (
          <PageWrapper title="Galéria">
            <Gallery />
          </PageWrapper>
        ),
      },
      {
        path: "/nograd-megye/contact",
        element: (
          <PageWrapper title="Kapcsolat">
            <Contact />
          </PageWrapper>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
);
