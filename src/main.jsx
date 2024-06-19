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
        path: "now",
        element: <Now />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <p class="w-[64rem] text-center font-albert font-bold text-3xl mt-48">Projects section is in progress!</p>
      },
      {
        path: "resume",
        element: <p class="w-[64rem] text-center font-albert font-bold text-3xl mt-48">Resume section is in progress!</p>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
