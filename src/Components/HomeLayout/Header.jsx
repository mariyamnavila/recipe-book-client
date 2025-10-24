import chicken from '../../assets/chicken.png';
import chili1 from '../../assets/chilli-shape.png';
import chili2 from '../../assets/chilli-shape-2.png';
import chili3 from '../../assets/chilli-shape-3.png';
import fire from '../../assets/fire-shape.png';
import { Fade, Slide } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
const Header = () => {
    return (
        <div className="bg-[url('./assets/hero-bg.jpg')] bg-cover bg-center relative">
            <div>
                <img className='absolute top-20' src={chili1} alt="" />
                <img className='absolute bottom-0' src={fire} alt="" />
            </div>
            <div className="max-w-7xl mx-auto py-[150px] flex relative">
                <div className="relative">
                    <div className="space-y-4 z-20 relative pt-12 ml-7">
                        <Fade direction='up' cascade damping={0.3}>
                            <p className="text-[#dc2419] text-2xl font-semibold">Discover flavors that feel like home.</p>
                            {/* <h2 className="text-8xl text-white font-semibold">COOK. TASTE. SMILE.</h2> */}
                            <span className="text-8xl text-white font-semibold">
                                <Typewriter
                                    words={['COOK. TASTE. SMILE.', 'Elevate Every Dish.']}
                                    loop={true}
                                    cursor
                                    cursorStyle={'|'}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                            <button className="btn relative overflow-hidden group bg-[#c30a00] border border-[#c30a00] text-xl text-white px-7 py-6">
                                <span class="absolute inset-0 bg-[#008000] transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center"></span>
                                <span class="relative z-10">Read More</span>
                            </button>
                        </Fade>
                    </div>
                    <Slide direction='right' fraction={0.8} triggerOnce>
                        <h1 className="text-[#ffffff5e] text-[180px] ml-8 font-bold -bottom-7 relative">Recipe Paradise</h1>
                    </Slide>
                </div>
                <div className='absolute z-0 right-0'>
                    <img className='w-[600px]' src={chicken} alt="" />
                </div>
            </div>
            <div>
                <img className='absolute right-0 top-20' src={chili2} alt="" />
                <img className='absolute right-0 -bottom-24' src={chili3} alt="" />
            </div>
        </div>
    );
};

export default Header;