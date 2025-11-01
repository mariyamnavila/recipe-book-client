import { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import MyRecipeCard from "../Components/MyRecipeCard";
import WishlistCard from "../Components/WishlistCard";


const MyWishlist = () => {
    const [likedRecipes, setLikedRecipes] = useState([]);
    const { user } = use(AuthContext)
    // console.log(user?.uid);
    useEffect(() => {
        fetch(`https://recipe-book-server-gamma-opal.vercel.app/recipes/likedRecipes/${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                setLikedRecipes(data)
            })
    }, [user?.uid])
    // console.log(likedRecipes);
    return (
        <div>
            <div className="bg-[url('./assets/AllRecipesBanner.JPG')] bg-cover bg-fixed ">
                <div className="bg-[#2222227c]">
                    <div className="py-14 max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl font-semibold text-[#fbe6e5]">My Wishlist Recipes</h2>
                        <p className="text-[#fbe6e5]">A curated list of your favorite finds. Revisit, explore, and bring your most desired recipes to life whenever you wish.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                {
                    likedRecipes?.length > 0 ? (
                        <div className="pl-3 py-10">
                            {
                                likedRecipes?.map(recipe => (
                                    <WishlistCard
                                    key={recipe._id}
                                    recipe={recipe}
                                    ></WishlistCard>
                                ))
                            }
                        </div>
                    ) : (
                        <p className="text-center py-10 text-lg">You have not liked any recipes yet.</p>
                    )
                }
            </div>
        </div>
    );
};

export default MyWishlist;