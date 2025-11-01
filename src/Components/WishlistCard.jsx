import React from 'react';

const WishlistCard = ({ recipe }) => {
    const { _id,
        title,
        image,
        ingredients,
        instructions,
        cuisineType,
        preparationTime,
        likeCount,
        categories
    } = recipe;
    const arrayOfIngredients = ingredients.split(',');
    return (
        <div className="mx-2 mb-4 p-5 border border-base-200 rounded-lg hover:shadow-lg transform transition duration-300 hover:-translate-y-1 ">
            <div className="flex flex-col md:flex-row items-stretch">
                <img className="w-full md:w-[500px] object-cover mr-5 rounded-lg" src={image} alt="" />
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
                    <div className="">
                        <h4 className="font-semibold">Categories:</h4>
                        <ul className="list-disc list-inside">
                            {categories.map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;