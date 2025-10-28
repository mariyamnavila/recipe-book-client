import { useContext, useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import { AuthContext } from "../Contexts/AuthContext";


const AddRecipes = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const { user } = useContext(AuthContext);
    const options = [
        { value: 'Breakfast', label: 'Breakfast' },
        { value: 'Lunch', label: 'Lunch' },
        { value: 'Dinner', label: 'Dinner' },
        { value: 'Dessert', label: 'Dessert' },
        { value: 'Vegan', label: 'Vegan' }
    ]

    // console.log(user?.uid);
    const handleAddRecipes = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries())
        const userId = user?.uid || 'guest';
        newRecipe.userId = userId;
        const stringNum1 = newRecipe.likeCount;
        const stringNum2 = newRecipe.preparationTime;
        newRecipe.likeCount = parseInt(stringNum1);
        newRecipe.preparationTime = parseInt(stringNum2);
        newRecipe.categories = selectedCategories;
        console.log(newRecipe);


        fetch('http://localhost:3000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Recipe has been Added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }

            })
    }

    return (
        <div>
            <div className="bg-[url('./assets/addRecipeBanner.jpg')] bg-cover bg-fixed ">
                <div className="bg-[#ffffff7c]">
                    <div className="py-14 max-w-7xl mx-auto ml-3 text-center">
                        <h2 className="text-4xl font-semibold text-[#150100]">Add Recipes</h2>
                        <p className="text-[#410300]">Add your gourmet creations to our curated recipe library and showcase the art of exceptional cooking.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto py-10">
                {/* <h3 className="text-2xl font-bold">Add Your Recipe Here</h3> */}
                <form onSubmit={handleAddRecipes}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
                        <fieldset className="fieldset  mx-6">
                            <label className="label font-bold text-[16px] text-primary">Title</label>
                            <input type="text" name="title" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" />
                        </fieldset>
                        <fieldset className="fieldset mx-6">
                            <label className="label font-bold text-[16px] text-primary">Instructions</label>
                            <input type="text" name="instructions" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" />
                        </fieldset>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
                        <fieldset className="fieldset  mx-6">
                            <label className="label font-bold text-[16px] text-primary">Ingredients</label>
                            <input type="text" name="ingredients" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" />
                        </fieldset>
                        <fieldset className="fieldset mx-6">
                            <label className="label font-bold text-[16px] text-primary">Preparation Time</label>
                            <input type="number" name="preparationTime" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" />
                        </fieldset>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-3">
                        <fieldset className="fieldset  mx-6">
                            <label className="label font-bold text-[16px] text-primary">Like count</label>
                            <input type="number" name="likeCount" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" defaultValue={0} />
                        </fieldset>
                        <fieldset className="fieldset  mx-6">
                            <label className="label font-bold text-[16px] text-primary">Cuisine Type</label>
                            <select defaultValue="Cuisine Type" name="cuisineType" className="px-2 py-3 focus:outline-none border-b w-full" required>
                                <option disabled={true}>Cuisine Type</option>
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                                <option> Others</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset mx-6">
                            <label className="label font-bold text-[16px] text-primary">Categories</label>
                            <Select
                                options={options}
                                name="categories"
                                isMulti classNamePrefix="select"
                                className="basic-multi-select"
                                onChange={(selectedOptions) =>
                                    setSelectedCategories(selectedOptions.map(option => option.value))
                                }
                                required
                            />
                            {/* <input type="text" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" /> */}
                        </fieldset>
                    </div>
                    <div>
                        <fieldset className="fieldset mx-6">
                            <label className="label font-bold text-[16px] text-primary">Photo URL</label>
                            <input type="text" name="image" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe photo URL" />
                        </fieldset>
                    </div>
                    <button className="btn bg-[#e03c32] text-white my-3 mx-auto block">Add Recipe</button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipes;