import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleFeaturedCard from "../SingleFeaturedCard";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Featured = () => {
    const recipes = useLoaderData();
    return (
        <div className=" py-20 ">
            <div className="flex-col text-center space-y-2 max-w-7xl mx-auto">
                <Fade direction="up" fraction={.8} cascade damping={0.3} triggerOnce>
                    <h3 className="text-5xl font-semibold text-primary ">FEATURED CREATIONS</h3>
                    <p className="font-medium text-secondary ">A distinguished selection of culinary masterpieces, each designed to transform simple ingredients into an unforgettable dining experience.</p>
                </Fade>
            </div>
            <div className='relative max-w-7xl mx-auto pt-10 mb-5'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper "
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {recipes?.map(recipe => <SwiperSlide key={recipe._id}>
                        <SingleFeaturedCard recipe={recipe}></SingleFeaturedCard>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default Featured;