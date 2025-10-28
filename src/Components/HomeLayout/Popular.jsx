import { Fade } from "react-awesome-reveal";
import { Link, useLoaderData } from "react-router-dom";
import PopularCard from "../PopularCard";

const Popular = () => {
    const recipes = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto py-16">
            <div className="flex-col text-center space-y-2">
                <Fade direction="up" fraction={.8} cascade damping={0.3} triggerOnce>
                    <h3 className="text-5xl font-semibold text-primary ">MOST POPULAR RECIPES</h3>
                    <p className="font-medium text-secondary ">Explore beloved dishes that have earned their place at the top of every food lover’s list.</p>
                </Fade>
            </div>
            {/* Popular Recipes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {recipes?.map(recipe => <PopularCard key={recipe._id} recipe={recipe}></PopularCard>)}
            </div>
            <div className="flex justify-center mt-6">
                <Link to={'/allRecipes'}>
                    <button className="btn relative overflow-hidden group bg-[#c30a00] border border-[#c30a00] text-xl text-white px-7 py-6">
                        <span className="absolute inset-0 bg-[#008000] transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center"></span>
                        <span className="relative z-10">All Recipes</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Popular;