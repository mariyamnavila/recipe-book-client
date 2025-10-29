import { MdDeleteOutline } from "react-icons/md";

const MyRecipeCard = ({ recipe }) => {
    const { title,
        image,
        ingredients,
        instructions,
        cuisineType,
        preparationTime,
        likeCount
    } = recipe;
    const arrayOfIngredients = ingredients.split(',');
    return (
        <div className="mx-2 mb-4 p-5 border border-base-200 rounded-lg hover:shadow-lg transform transition duration-300 hover:-translate-y-1 ">
            <div className="flex flex-col md:flex-row">
                <img className="w-[350px] grow object-cover mr-5 rounded-lg" src={image} alt="" />
                <div className="flex flex-col grow">
                    <h3 className="text-2xl font-semibold mt-3 md:mt-0">{title}</h3>
                    <div className="my-1 ">
                        <h4 className="font-semibold">Instructions:</h4>
                        <p>{instructions}</p>
                    </div>
                    <div className="my-2">
                        <p><span className="font-semibold">Cuisine Type:</span> {cuisineType}</p>
                        <p><span className="font-semibold">Preparation Time:</span> {preparationTime} minutes</p>
                        <p><span className="font-semibold">Likes:</span> {likeCount}</p>
                    </div>
                    <div className="">
                        <h4 className="font-semibold">Ingredients:</h4>
                        <ul className="list-disc list-inside">
                            {arrayOfIngredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-2">
                        <button className="btn relative overflow-hidden group bg-[#d97900] border border-[#d97900]  text-white mr-2
                    ">
                            <span className="absolute inset-0 bg-[#8d4e00] transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
                            <span className="relative z-10">Update Recipe</span>
                        </button>
                        <button className="btn relative overflow-hidden group bg-white mr-2 text-red-600 hover:text-white border border-red-600">
                            <span className="absolute inset-0 bg-red-600 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center "></span>
                            <span className="relative z-10 "><MdDeleteOutline className="hover:text-white text-lg"/></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRecipeCard;