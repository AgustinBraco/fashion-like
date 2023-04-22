import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomProvider } from './context/context.jsx';

// Roots
import ErrorRoot from './routes/error.jsx';
import Root from './routes/root.jsx';
import TycRoot from './routes/tyc.jsx';

const router = createBrowserRouter([
  {
    errorElement: <ErrorRoot />,
  },
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/tyc",
    element: <TycRoot />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);