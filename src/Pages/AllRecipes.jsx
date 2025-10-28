import { useLoaderData } from "react-router-dom";
import RecipeCard from "../Components/RecipeCard";

const AllRecipes = () => {
    const allRecipes = useLoaderData();
    return (
        <div>
            <div className="bg-[url('./assets/AllRecipesBanner.JPG')] bg-cover bg-fixed ">
                <div className="bg-[#2222227c]">
                    <div className="py-14 max-w-7xl mx-auto ml-3 text-center">
                        <h2 className="text-4xl font-semibold text-[#fbe6e5]">All Recipes</h2>
                        <p className="text-[#fbe6e5]">Browse an extensive collection of carefully curated recipes, offering a world of flavors for every mood, moment, and appetite.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pl-3 py-10">
                    {
                        allRecipes?.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllRecipes;