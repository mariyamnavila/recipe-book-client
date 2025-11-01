import { useContext, useEffect, useState } from "react";
import { IoIosTimer, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { LuCookingPot } from "react-icons/lu";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { BiCategory } from "react-icons/bi";
import { MdOutlineChecklist } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { AuthContext } from "../Contexts/AuthContext";

const RecipeDetails = () => {
    const [liked, setLiked] = useState(false)
    const [likeCountState, setLikeCountState] = useState(0);
    const { user } = useContext(AuthContext);
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

    const arrayOfIngredients = ingredients.split(',');
    const handleLikeCount = (e) => {
        if (e.target.checked) {
            fetch(`https://recipe-book-server-gamma-opal.vercel.app/recipes/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ likeCount: likeCountState + 1 })
            })
                .then(res => res.json())
                .then(data => {
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

                        const likedRecipe = {
                            recipeId: _id,
                            userId: user?.uid,
                            image: image,
                            title: title,
                            instructions: instructions,
                            ingredients: ingredients,
                            cuisineType: cuisineType,
                            preparationTime: preparationTime,
                            categories: categories,
                            likeCount: likeCount
                        };

                        fetch(`https://recipe-book-server-gamma-opal.vercel.app/recipes/likedRecipes`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(likedRecipe)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                            });
                    }
                })


        } else {
            fetch(`https://recipe-book-server-gamma-opal.vercel.app/recipes/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ likeCount: likeCountState - 1 })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        // Swal.fire({
                        //     title: "You unliked this recipe!",
                        //     icon: "error",
                        //     draggable: true,
                        //     timer: 1500,
                        //     showConfirmButton: false
                        // });
                        setLiked(false)
                        setLikeCountState(likeCountState - 1)
                        localStorage.setItem(`liked-${_id}`, false);

                        fetch(`https://recipe-book-server-gamma-opal.vercel.app/recipes/likedRecipes/${_id}/${user?.uid}`, {
                            method: 'DELETE',
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                            });
                    }
                })
        }


    }

    return (
        <div className="max-w-6xl mx-auto flex-col md:flex-row flex justify-evenly items-stretch border border-base-200 rounded-lg mb-10 p-5 my-7">
            <div className="md:w-1/2 shrink-0 py-10">
                <img className="object-cover w-full h-full rounded-md" src={image} alt="" />
            </div>
            <div className="px-10 py-10 flex flex-col grow">
                <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-1.5 flex items-center"> <MdOutlineChecklist className="mr-2 text-primary" /> Instructions:</h3>
                    <p className="text-base-200 mb-1.5">{instructions}</p>
                </div>
                <div className="mb-1">
                    <h3 className="text-2xl font-semibold text-primary mb-2 flex items-center"><GiForkKnifeSpoon className="mr-2 text-primary" /> Ingredients:</h3>
                    <ul className="list-disc list-inside">
                        {arrayOfIngredients.map((ingredient, index) => (
                            <li key={index} className="text-base-200">{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-primary mb-2 flex items-center"> <BiCategory className="mr-2 text-primary" /> Categories:</h3>
                    <ul className="list-disc list-inside">
                        {categories.map((category, index) => (
                            <li key={index} className="text-base-200">{category}</li>
                        ))}
                    </ul>
                </div>
                <div className=" my-2">
                    <p className="font-medium text-base-200 flex items-center mr-3"><LuCookingPot className="mr-2 text-primary" /> Cuisine Type: {cuisineType}</p>
                    <p className="font-medium text-base-200 flex items-center"><IoIosTimer className="mr-2 text-primary" /> Preparation Time: {preparationTime} mins</p>
                </div>
                <div className="flex items-center font-semibold">
                    <div className="heart-container" title="Like">
                        <input type="checkbox" className="checkbox" id="Give-It-An-Id" checked={liked} onChange={handleLikeCount} />
                        <div className="svg-container">
                            <svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                                </path>
                            </svg>
                            <svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                                </path>
                            </svg>
                            <svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,10 20,20"></polygon>
                                <polygon points="10,50 20,50"></polygon>
                                <polygon points="20,80 30,70"></polygon>
                                <polygon points="90,10 80,20"></polygon>
                                <polygon points="90,50 80,50"></polygon>
                                <polygon points="80,80 70,70"></polygon>
                            </svg>
                        </div>
                    </div>
                    <p >
                        {likeCountState} people liked this recipe!
                    </p>
                </div>
                <div className="my-3">
                    <Link to={'/allRecipes'}>
                    <button className="btn relative overflow-hidden group bg-[#c30a00] border border-[#c30a00] text-xl text-white px-7 py-6">
                        <span className="absolute inset-0 bg-[#008000] transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center"></span>
                        <span className="relative z-10">Back to all recipes</span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;