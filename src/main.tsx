import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importe suas páginas
import { HomePage } from './pages/home/home.tsx';
import { AboutPage } from './pages/sobre/sobre.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // O App é o elemento pai (layout)
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "sobre",
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
