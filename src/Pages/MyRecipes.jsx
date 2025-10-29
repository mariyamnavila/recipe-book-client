import { use } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import MyRecipeCard from "../Components/MyRecipeCard";


const MyRecipes = () => {
    const recipes = useLoaderData();
    const { user } = use(AuthContext);
    const userId = user?.uid || 'guest';
    const userRecipes = recipes.filter(recipe => recipe.userId === userId);
    console.log(user?.uid);
    console.log(userRecipes);
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
                    userRecipes.length > 0 ? (
                        <div className="pl-3 py-10">
                            {
                                userRecipes.map(recipe => (
                                   <MyRecipeCard key={recipe._id} recipe={recipe}></MyRecipeCard> 
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