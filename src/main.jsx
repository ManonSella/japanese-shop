import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.jsx";//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./routes/contact";

import Root from "./routes/root";
import ErrorPage from "./error-page";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "buy",
        element: <div>Buy our stuff</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
