import { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import MyRecipeCard from "../Components/MyRecipeCard";
import Swal from "sweetalert2";


const MyRecipes = () => {
    const [myRecipes, setMyRecipes] = useState([])
    const recipes = useLoaderData();
    const { user } = use(AuthContext);
    // const userId = user?.uid || 'guest';
    useEffect(() => {
        if (!user) {
            setMyRecipes([]);
            return;
        }
        const userRecipes = recipes.filter(recipe => recipe.userId === user.uid);
        setMyRecipes(userRecipes)
    }, [recipes, user]);

    const handleDeleteRecipe = (id) => {
        // Implement the delete logic here
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/recipes/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                const remainingRecipes = myRecipes.filter(recipe => recipe._id !== id);
                setMyRecipes(remainingRecipes);
            }
        });

    }

    return (
        <div className="">
            <div className="bg-[url('./assets/myRecipesBanner.jpg')] bg-center bg-cover bg-fixed ">
                <div className="bg-[#2222227c]">
                    <div className="py-14 max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl font-semibold text-white">My Recipes</h2>
                        <p className="text-[#fbe6e5]">Every dish tells your story — a reflection of creativity and passion. Here are the recipes you’ve added, loved, and shared. Manage, edit, and revisit them anytime to continue your flavorful journey.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                {
                    myRecipes.length > 0 ? (
                        <div className="pl-3 py-10">
                            {
                                myRecipes.map(recipe => (
                                    <MyRecipeCard key={recipe._id} recipe={recipe} handleDeleteRecipe={handleDeleteRecipe}></MyRecipeCard>
                                ))
                            }
                        </div>
                    ) : (
                        <p className="text-center py-10 text-lg">You have not added any recipes yet.</p>
                    )
                }
            </div>
        </div>
    );
};

export default MyRecipes;