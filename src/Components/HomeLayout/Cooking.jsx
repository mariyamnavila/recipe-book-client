import { IoFastFoodOutline } from "react-icons/io5";
import chef from '../../assets/chefs.jpg';
import { TbToolsKitchen2 } from "react-icons/tb";
import { RiCake3Line } from "react-icons/ri";
import { PiChefHatBold } from "react-icons/pi";
import { Slide } from 'react-awesome-reveal';
const Cooking = () => {
    return (
        <div className="bg-[url('./assets/cookingBanner.jpg')] bg-cover bg-fixed">
            <div className="bg-[#000000a1]">
                <div className="py-14 max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ml-3">
                        <Slide direction="left" fraction={0.8} cascade damping={0.3} triggerOnce>
                            <div className="space-y-3">
                                <IoFastFoodOutline className="text-[#ec6052] text-6xl" />
                                <div className="space-y-2">
                                    <h4 className="text-[#fbe6e5] text-3xl font-semibold">Deliciously Fast Recipes</h4>
                                    <p className="text-white">Discover quick and flavorful dishes that save time without compromising taste. Perfect for busy days!</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <TbToolsKitchen2 className="text-[#ec6052] text-6xl" />
                                <div className="space-y-2">
                                    <h4 className="text-[#fbe6e5] text-3xl font-semibold">Expert Cooking Tips & Tools</h4>
                                    <p className="text-white">Unlock culinary secrets and essential techniques to elevate your kitchen skills confidently.</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <RiCake3Line className="text-[#ec6052] text-6xl" />
                                <div className="space-y-2">
                                    <h4 className="text-[#fbe6e5] text-3xl font-semibold">Bakes That Melt Hearts</h4>
                                    <p className="text-white">From cupcakes to layered masterpieces—sweet creations that bring joy to every celebration.</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <PiChefHatBold className="text-[#ec6052] text-6xl" />
                                <div className="space-y-2">
                                    <h4 className="text-[#fbe6e5] text-3xl font-semibold">Crafted by Passionate Chefs</h4>
                                    <p className="text-white">Enjoy recipes curated with care, creativity, and professional expertise for every level of cook.</p>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <img className="relative top-15 right-10" src={chef} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
{/* <IoFastFoodOutline /> */ }
{/* <TbToolsKitchen2 /> */ }
{/* <RiCake3Line /> */ }
{/* <PiChefHatBold /> */ }
export default Cooking;