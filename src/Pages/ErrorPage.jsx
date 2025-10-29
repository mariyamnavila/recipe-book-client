import Navbar from '../Components/HomeLayout/Navbar';
import Footer from '../Components/HomeLayout/Footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='justify-center items-center flex-col relative'>
                <DotLottieReact
                className='relative -top-6 lg:w-[600px] w-[300px] mx-auto'
                    src="https://lottie.host/7edca72b-7988-49bf-85be-b06df5282e3e/VOoSsRn1Yj.lottie"
                    loop
                    autoplay
                />
                <DotLottieReact
                    className='lg:w-[600px] w-[200px] mx-auto relative -top-16 lg:-top-28'
                    src="https://lottie.host/ee79af3d-5fbc-4a8a-a733-f6a43ced4fa3/ZgxtM0tv6q.lottie"
                    loop
                    autoplay
                />
                <h2 className='text-4xl lg:text-6xl font-bold text-center text-red-600 relative -top-20 lg:-top-32'>Oops! Page Not Found</h2>
                <p className='text-center mt-4 text-lg lg:text-xl relative -top-16 lg:-top-28'>The page you are looking for might have been removed had its name changed or is temporarily unavailable. 
                    <br />
                    or We're cooking up something new!
                </p>
                <button className='btn btn-error bg-red-600 border-0 text-white mx-auto block mt-6 relative -top-12 lg:-top-20'><Link to={'/'}> Go Back Home</Link></button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;