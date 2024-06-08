import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import BlogPostsPage from './pages/BlogPostsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/users',
        element: <UsersPage />
      }
    ]
  },
  {
    path: '/blog-posts',
    element: <BlogPostsPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
