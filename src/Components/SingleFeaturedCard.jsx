import { FaRegHeart } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { LuCookingPot } from "react-icons/lu";

const SingleFeaturedCard = ({ recipe }) => {
    const { title, likeCount, preparationTime, cuisineType,image } = recipe
    return (
        <div className="p-4 rounded-xl border border-base-200 mx-5">
            <img className="object-cover w-[400px] h-[200px] rounded-lg" src={image} alt="" />
            <div>
                <h3 className="text-2xl font-semibold text-primary my-2 text-center">{title}</h3>
                <div className="flex justify-evenly">
                    <p className="font-medium text-base-200 flex items-center"> <LuCookingPot className="mr-2"/> {cuisineType}</p>
                    <p className="font-medium text-base-200 border-x border-x-base-200 px-6 flex items-center"> <IoIosTimer className="mr-2"/> {preparationTime} mins</p>
                    <p className="font-medium text-base-200 flex items-center"> <FaRegHeart className="mr-2"/> {likeCount} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleFeaturedCard;