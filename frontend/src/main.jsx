import './style.css';
import React from 'react';
import { CustomProvider } from './context/context.jsx';

// Router DOM
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Routes
import Root from './routes/root.jsx';
import FeedRoute from './routes/feed.jsx';
import PostRoute from './routes/post.jsx';
import AccountRoute from './routes/account.jsx';
import ErrorRoute from './routes/error.jsx';


const router = createBrowserRouter([
  {
    errorElement: <ErrorRoute />,
  },
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/feed",
    element: <FeedRoute />,
  },
  {
    path: "/post/:id",
    element: <PostRoute />,
  },
  {
    path: "/account",
    element: <AccountRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);