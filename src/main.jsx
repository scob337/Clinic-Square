import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from './Components/MainLayOut.jsx';
import Home from './Components/Home/home.jsx';
import Doctors from './Pages/doctors.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayOut />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/doctors", element: <Doctors /> },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
