import { FaRegHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const PopularCard = ({ recipe }) => {
    const { _id, image, title, cuisineType, likeCount } = recipe;
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate(`/recipeDetails/${id}`)
    }
    return (
        <div className="p-4 rounded-xl border border-base-200 ml-3">
            <img className="object-cover w-full h-[200px] rounded-lg" src={image} alt="" />
            <div>
                <div className="flex justify-between items-center my-2">
                    <h3 className="text-2xl font-semibold text-primary">{title}</h3>
                    <p className="text-base-200 ">{cuisineType}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="font-medium text-secondary flex items-center"> <FaRegHeart className="mr-2" /> {likeCount} </p>
                    <button
                        onClick={() => handleNavigate(_id)}
                        className="btn relative overflow-hidden group bg-[#c30a00] border border-[#c30a00] text-xl text-white ">
                        <span className="absolute inset-0 bg-[#6c0600] transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center"></span>
                        <span className="relative z-10">Details</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;