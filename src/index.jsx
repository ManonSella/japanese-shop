import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

//import App from "./App.jsx";//
import Layout from "./Layout";
import Cards from "./components/Cards";

import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import News from "./pages/News";
import Home from "./pages/Home";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "essentials",
        element: <Cards kind="essentials" />,
      },
      {
        path: "drinks",
        element: <Cards kind="drinks" />,
      },
      {
        path: "drinks/beers",
        element: <Cards kind="beers" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
