import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Index from './Index.jsx'
import Now from './Now.jsx'
import About from './About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Project from './Projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Project />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
