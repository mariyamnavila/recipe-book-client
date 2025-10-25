import { Fade, Slide } from "react-awesome-reveal";
import { FaPhoneSquareAlt } from "react-icons/fa";


const ContactUs = () => {
    return (
        <div className="bg-[url('./assets/ContactUs.jpg')]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row pt-16 space-y-10 items-center lg:space-y-0 justify-between px-5">
                <div>
                    <Slide direction="left" duration={1500} fraction={0.8} triggerOnce>
                    <p className="text-[#dc2419] text-2xl font-semibold mb-2.5">Discover flavors that feel like home.</p>
                    <span className="text-7xl text-white font-semibold">
                        Get in Touch
                    </span>
                    <div className="flex items-center mt-7">
                        <FaPhoneSquareAlt className="text-[#a11811] mr-4 text-7xl" />
                        <div>
                            <p className="text-white font-semibold text-2xl">24/7 Support center</p>
                            <span className="text-[#a11811] text-4xl"> +123 456 7890</span>
                        </div>
                    </div>
                    </Slide>
                </div>
                <Fade direction="up" duration={1500} fraction={0.8} triggerOnce>
                <div className="mt-10 bg-[url('./assets/halfContact.jpg')] bg-cover bg-center p-7 rounded-t-xl lg:mr-5">
                    <p className="text-white font-semibold text-3xl text-center mb-4">CREATE A MESSAGE</p>
                    <form className="md:w-[400px] w-[265px] ">
                        <div className="mb-4">
                            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#dc2419] text-white" />
                        </div>
                        <div className="mb-4">
                            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#dc2419] text-white" />
                        </div>
                        <div className="mb-4">
                            <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#dc2419] text-white" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn relative overflow-hidden group bg-[#c30a00] border border-[#c30a00] text-xl text-white px-7 py-6">
                            <span className="absolute inset-0 bg-[#008000] transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center"></span>
                            <span className="relative z-10">Send Message</span>
                        </button>
                    </form>
                </div>
                </Fade>
            </div>
        </div>
    );
};

export default ContactUs;