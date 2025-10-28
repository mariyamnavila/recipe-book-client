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
import AllRecipes from './Pages/AllRecipes';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AuthProvider from './Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/recipes/main'),
        Component: Home
      },
      {
        path: '/addRecipes',
        Component: AddRecipes
      },
      {
        path: '/allRecipes',
        loader: () => fetch('http://localhost:3000/recipes/all'),
        Component: AllRecipes
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
