import './style.css';
import React from 'react';
import { CustomProvider } from './context/context.jsx';

// Router DOM
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Roots
import Root from './routes/root.jsx';
import FeedRoute from './routes/feed.jsx';

import ErrorRoot from './routes/error.jsx';
// import PostsRoout from './routes/posts.jsx';
// import LoginRoout from './routes/login.jsx';
// import RegisterRoout from './routes/register.jsx';
// import AccountRoout from './routes/account.jsx';
// import ContactRoout from './routes/contact.jsx';
// import ManagementRoot from './routes/management.jsx';


const router = createBrowserRouter([
  {
    errorElement: <ErrorRoot />,
  },
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/feed",
    element: <FeedRoute />,
  },
  // {
  //   path: "/posts",
  //   element: <PostsRoout />,
  // },
  // {
  //   path: "/login:id",
  //   element: <LoginRoout />,
  // },
  // {
  //   path: "/register",
  //   element: <RegisterRoout />,
  // },
  // {
  //   path: "/account",
  //   element: <AccountRoout />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactRoout />,
  // },
  // {
  //   path: "/management",
  //   element: <ManagementRoot />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);