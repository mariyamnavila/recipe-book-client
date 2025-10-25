import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
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
                {recipes.map(recipe => <PopularCard key={recipe._id} recipe={recipe}></PopularCard>)}
            </div>
        </div>
    );
};

export default Popular;