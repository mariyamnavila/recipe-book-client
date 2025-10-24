import { useState } from "react";
import Select from "react-select";


const AddRecipes = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const handleAddRecipes = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries())
        newRecipe.categories = selectedCategories;
        console.log(newRecipe);
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
                            <label className="label font-bold text-[16px] text-black">Title</label>
                            <input type="text" name="title" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" />
                        </fieldset>
                        <fieldset className="fieldset mx-6">
                            <label className="label font-bold text-[16px] text-black">Instructions</label>
                            <input type="text" name="instructions" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" />
                        </fieldset>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">
                        <fieldset className="fieldset  mx-6">
                            <label className="label font-bold text-[16px] text-black">Ingredients</label>
                            <input type="text" name="ingredients" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" />
                        </fieldset>
                        <fieldset className="fieldset mx-6">
                            <label className="label font-bold text-[16px] text-black">Preparation Time</label>
                            <input type="number" name="preparationTime" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" />
                        </fieldset>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-3">
                        <fieldset className="fieldset  mx-6">
                            <label className="label font-bold text-[16px] text-black">Like count</label>
                            <input type="text" name="likeCount" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe title" />
                        </fieldset>
                        <fieldset className="fieldset  mx-6">
                            <label className="label font-bold text-[16px] text-black">Cuisine Type</label>
                            <select defaultValue="Pick a color" name="cuisineType" className="px-2 py-3 focus:outline-none border-b w-full" required>
                                <option disabled={true}>Pick a color</option>
                                <option>Crimson</option>
                                <option>Amber</option>
                                <option>Velvet</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset mx-6">
                            <label className="label font-bold text-[16px] text-black">Categories</label>
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
                            <label className="label font-bold text-[16px] text-black">Photo URL</label>
                            <input type="text" name="photoURL" className="px-2 py-3 focus:outline-none border-b w-full" placeholder="Your recipe photo URL" />
                        </fieldset>
                    </div>
                    <button className="btn bg-[#e03c32] text-white my-3 mx-auto block">Add Recipe</button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipes;