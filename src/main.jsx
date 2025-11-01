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
import Errorpage from './Pages/ErrorPage';
import Loading from './Pages/Loading';
import RecipeDetails from './Pages/RecipeDetails';
import MyRecipes from './Pages/MyRecipes';
import PrivateRoute from './Provider/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        loader: () => fetch('https://recipe-book-server-gamma-opal.vercel.app/recipes/main'),
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/addRecipes',
        element: <PrivateRoute><AddRecipes></AddRecipes></PrivateRoute>
      },
      {
        path: '/allRecipes',
        loader: () => fetch('https://recipe-book-server-gamma-opal.vercel.app/recipes/all'),
        Component: AllRecipes,
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/myRecipes',
        element: <PrivateRoute><MyRecipes /></PrivateRoute>,
        loader: async () => {
          const res = await fetch('https://recipe-book-server-gamma-opal.vercel.app/recipes/all');
          return res.json();
        },
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/recipeDetails/:id',
        loader: ({ params }) => fetch(`https://recipe-book-server-gamma-opal.vercel.app/recipes/${params.id}`),
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        hydrateFallbackElement: <Loading></Loading>
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
