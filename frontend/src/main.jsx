import './style.css';
import React from 'react';
import { CustomProvider } from './context/context.jsx';

// Router DOM
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Roots
import ErrorRoot from './routes/error.jsx';
import Root from './routes/root.jsx';
import Posts from './routes/posts.jsx';
import Login from './routes/login.jsx';
import Register from './routes/register.jsx';
import Account from './routes/account.jsx';
import Contact from './routes/contact.jsx';
import Management from './routes/management.jsx';


const router = createBrowserRouter([
  {
    errorElement: <ErrorRoot />,
  },
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/account",
    element: <Account />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/management",
    element: <Management />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);