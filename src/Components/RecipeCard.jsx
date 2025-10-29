import { FaRegHeart } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { LuCookingPot } from "react-icons/lu";
import { Link } from "react-router-dom";


const RecipeCard = ({ recipe }) => {
    const { _id, title, likeCount, preparationTime, cuisineType, image } = recipe
    // console.log(image);
    return (
        <div className="p-4 rounded-xl border border-base-200">
            <img className="object-cover w-[400px] h-[200px] rounded-lg" src={image} alt="" />
            <div>
                <h3 className="text-2xl font-semibold text-primary my-3 text-center">{title}</h3>
                <div className="flex justify-evenly my-1">
                    <p className="font-medium text-base-200 flex items-center"> <LuCookingPot className="mr-2" /> {cuisineType}</p>
                    <div className="border-x border-x-base-200"></div>
                    <p className="font-medium text-base-200 flex items-center"> <IoIosTimer className="mr-1" /> {preparationTime} mins</p>
                    <div className="border-x border-x-base-200"></div>

                    <p className="font-medium text-base-200 flex items-center"> <FaRegHeart className="mr-2" /> {likeCount} </p>
                </div>
                <div>
                    <Link to={`/recipeDetails/${_id}`}>
                        <button className="btn relative overflow-hidden group bg-[#c30a00] border border-[#c30a00] text-xl text-white w-full mt-4
                    ">
                            {/* px-7 py-6 */}
                            <span className="absolute inset-0 bg-[#6c0600] transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center"></span>
                            <span className="relative z-10">Details</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;