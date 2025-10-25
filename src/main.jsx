import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './Layouts/HomeLayout';
import Home from './Pages/Home';
import AddRecipes from './Pages/AddRecipes';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children:[
      {
        index: true,
        loader: () => fetch('http://localhost:3000/recipes/main'),
        Component: Home
      },
      {
        path: '/addRecipes',
        Component: AddRecipes
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
