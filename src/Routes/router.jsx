import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllRecipes from "../Pages/AllRecipes";
import AddRecipes from "../Pages/AddRecipes";
import Loading from "../Pages/Loading";
import PrivateRoute from "../Provider/PrivateRoute";
import MyRecipes from "../Pages/MyRecipes";
import MyWishlist from "../Pages/MyWishlist";
import RecipeDetails from "../Pages/RecipeDetails";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Errorpage from '../Pages/ErrorPage'
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
                path: '/myWishlist',
                element: <PrivateRoute><MyWishlist /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://recipe-book-server-gamma-opal.vercel.app/recipes/likedRecipes/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/recipeDetails/:id',
                loader: ({ user }) => fetch(`https://recipe-book-server-gamma-opal.vercel.app/recipes/${user.uid}`),
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

export default router;