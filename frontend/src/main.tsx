import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.tsx';
import Home from './pages/Home.tsx';
import Car from './pages/Car.tsx';
import Calendar from './pages/Calendar.tsx';
import Map from './pages/Map.tsx';
import ErrorPage from "./error-page";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/car",
        element: <Car />
      },
      {
        path: "/calendar",
        element: <Calendar />
      },
      {
        path: "/map",
        element: <Map />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
