import { useContext, useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Select from "react-select";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const MyRecipeCard = ({ recipe, handleDeleteRecipe }) => {
    const { user } = useContext(AuthContext);
    const [selectedCategories, setSelectedCategories] = useState([]);
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
    const options = [
        { value: 'Breakfast', label: 'Breakfast' },
        { value: 'Lunch', label: 'Lunch' },
        { value: 'Dinner', label: 'Dinner' },
        { value: 'Dessert', label: 'Dessert' },
        { value: 'Vegan', label: 'Vegan' }
    ]
    useEffect(() => {
        const defaultCats = categories?.map(category => ({ value: category, label: category }));
        setSelectedCategories(defaultCats?.map(option => option.value) || []);
    }, [categories]);
    const defaultCategories = categories?.map(category => ({ value: category, label: category }));
    const arrayOfIngredients = ingredients.split(',');

    const handleUpdateRecipe = (e) => {
        e.preventDefault();
        // Implement the update logic here
        const form = e.target;
        const formData = new FormData(form);
        const updateRecipe = Object.fromEntries(formData.entries())

        const userId = user?.uid || 'guest';
        updateRecipe.userId = userId;
        const stringNum1 = updateRecipe.likeCount;
        const stringNum2 = updateRecipe.preparationTime;
        updateRecipe.likeCount = parseInt(stringNum1);
        updateRecipe.preparationTime = parseInt(stringNum2);
        updateRecipe.categories = selectedCategories.length
            ? selectedCategories
            : categories;
        console.log(updateRecipe);

        fetch(`http://localhost:3000/recipes/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateRecipe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Recipe updated successfully',
                        icon: "success",
                        draggable: true,
                        timer: 1500,
                        showConfirmButton: false,
                        topLayer: true,
                    });
                }
            })

    }

    return (
        <div className="mx-2 mb-4 p-5 border border-base-200 rounded-lg hover:shadow-lg transform transition duration-300 hover:-translate-y-1 ">
            <div className="flex flex-col md:flex-row">
                <img className="w-[400px] grow object-cover mr-5 rounded-lg" src={image} alt="" />
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
                        <button onClick={() => document.getElementById(`update_modal_of_${_id}`).showModal()} className="btn relative overflow-hidden group bg-[#d97900] border border-[#d97900]  text-white mr-2
                    ">
                            <span className="absolute inset-0 bg-[#8d4e00] transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
                            <span className="relative z-10">Update Recipe</span>
                        </button>
                        <dialog id={`update_modal_of_${_id}`} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg mb-4">Update Recipe - {title}</h3>
                                <div className="overflow-y-auto h-96">
                                    <form className="space-y-4" onSubmit={handleUpdateRecipe}>
                                        <fieldset className="fieldset">
                                            <label className="block font-semibold mb-1">Title:</label>
                                            <input type="text" name="title" defaultValue={title} className="input input-bordered w-full" />
                                        </fieldset>
                                        <fieldset>
                                            <label className="block font-semibold mb-1">Image URL:</label>
                                            <input name="image" type="text" defaultValue={image} className="input input-bordered w-full" />
                                        </fieldset>
                                        <fieldset>
                                            <label className="block font-semibold mb-1">Ingredients (comma separated):</label>
                                            <input name="ingredients" type="text" defaultValue={ingredients} className="input input-bordered w-full" />
                                        </fieldset>
                                        <fieldset>
                                            <label className="block font-semibold mb-1">Cuisine Type:</label>
                                            <select defaultValue={cuisineType} name="cuisineType" className="px-2 py-3 focus:outline-none border-b w-full" required>
                                                <option disabled={true}>Cuisine Type</option>
                                                <option>Italian</option>
                                                <option>Mexican</option>
                                                <option>Indian</option>
                                                <option>Chinese</option>
                                                <option> Others</option>
                                            </select>
                                        </fieldset>
                                        <fieldset>
                                            <label className="block font-semibold mb-1">Categories</label>
                                            <Select

                                                options={options}
                                                name="categories"
                                                isMulti
                                                classNamePrefix="select"
                                                className="basic-multi-select"
                                                onChange={(selectedOptions) =>
                                                    setSelectedCategories(selectedOptions.map(option => option.value))
                                                }
                                                defaultValue={defaultCategories}
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <label className="block font-semibold mb-1">Instructions:</label>
                                            <textarea name="instructions" defaultValue={instructions} className="textarea textarea-bordered w-full" rows="4"></textarea>
                                        </fieldset>
                                        <fieldset>
                                            <label className="block font-semibold mb-1">Preparation Time (minutes):</label>
                                            <input name="preparationTime" type="number" defaultValue={preparationTime} className="input input-bordered w-full" />
                                        </fieldset>
                                        <fieldset>
                                            <label className="block font-semibold mb-1">Like Count:</label>
                                            <input name="likeCount" type="number" defaultValue={likeCount} className="input input-bordered w-full" />
                                        </fieldset>
                                        <button type="submit" onClick={() => document.getElementById('update_modal').showModal()} className="btn bg-[#d97900] border border-[#d97900]  text-white">
                                            Save Changes
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <button onClick={() => { handleDeleteRecipe(_id) }} className="btn relative overflow-hidden group bg-white mr-2 text-red-600 hover:text-white border border-red-600">
                            <span className="absolute inset-0 bg-red-600 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center "></span>
                            <span className="relative z-10 "><MdDeleteOutline className="hover:text-white text-lg" /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyRecipeCard;