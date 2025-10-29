import { useEffect, useState } from "react";
import { IoIosTimer, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { LuCookingPot } from "react-icons/lu";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const RecipeDetails = () => {
    const [liked, setLiked] = useState(false)
    const [likeCountState, setLikeCountState] = useState(0);
    const { _id,
        image,
        title,
        instructions,
        ingredients,
        cuisineType,
        preparationTime,
        categories,
        likeCount
    } = useLoaderData();

    useEffect(() => {
        setLikeCountState(likeCount);
        localStorage.getItem(`liked-${_id}`) === 'true' ? setLiked(true) : setLiked(false);
    }, [likeCount, _id]);

    const arrayOfIngredient = ingredients.split(',');
    const handleLikeCount = () => {
        if (liked) {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `You have already liked this recipe!`,
            })
        } else {
            fetch(`http://localhost:3000/recipes/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ likeCount: likeCount + 1 })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            title: "You liked this recipe!",
                            icon: "success",
                            draggable: true,
                            timer: 1500,
                            showConfirmButton: false
                        });
                        setLiked(true)
                        setLikeCountState(likeCountState + 1)
                        localStorage.setItem(`liked-${_id}`, true);
                        console.log("Liked");
                    }
                })
        }


    }

    return (
        <div className="max-w-6xl mx-auto flex-col md:flex-row flex justify-evenly items-center border border-base-200 rounded-lg mb-10 p-5 my-7">
            <div>
                <img className="object-cover w-full h-[400px] rounded-md" src={image} alt="" />
            </div>
            <div className="px-10 py-10">
                <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2">Instructions:</h3>
                    <p className="text-base-200">{instructions}</p>
                </div>
                <div className="mb-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2">Ingredients:</h3>
                    <ul className="list-disc list-inside">
                        {arrayOfIngredient.map((ingredient, index) => (
                            <li key={index} className="text-base-200">{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2">Categories:</h3>
                    <ul className="list-disc list-inside">
                        {categories.map((category, index) => (
                            <li key={index} className="text-base-200">{category}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-evenly items-center my-2">
                    <p className="font-medium text-base-200 flex items-center"><LuCookingPot className="mr-2 text-primary" /> {cuisineType}</p>
                    <p className="font-medium text-base-200 flex items-center"><IoIosTimer className="mr-2 text-primary" /> {preparationTime} mins</p>
                </div>
                <div>
                    <p className="flex items-center">
                        <Rating
                            stop={1}
                            fullSymbol={<IoMdHeart className="text-red-500 text-2xl" />}
                            emptySymbol={<IoMdHeartEmpty className="text-red-500 text-2xl" />}
                            className="mt-1.5 mr-2"
                            onClick={() => handleLikeCount()}
                        />
                        {likeCountState} people liked this recipe!</p>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;