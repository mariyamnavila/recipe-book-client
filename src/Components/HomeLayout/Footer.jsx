import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa';
import footer from '../../assets/FinalLogo.PNG';

const Footer = () => {
    return (
        <div>
            <div>
                <div>
                    <footer className="footer sm:footer-horizontal container mx-auto text-base-content p-10">
                        <aside className='mx-auto lg:mx-0'>
                            <img className='w-[250px] md:w-[200px] lg:w-[70px] mx-auto lg:mx-0 mb-2' src={footer} alt="" />
                            <p className='text-3xl hover:text-[#a11811]'><span className='font-bold'>RECIPE</span> BOOK</p>
                            <p className='text-xl hover:text-[#a11811]'>recipebook@gmail.com</p>
                            <div className='flex '>
                                <a href="#home" className='bg-[#ffffff67] p-2 rounded-3xl mr-3 hover:text-[#560400] hover:bg-[#ef9d99]'>
                                    <FaFacebookF className='text-xl ' />
                                </a>
                                <a href="#home" className='bg-[#ffffff67] p-2 rounded-3xl mr-3 hover:text-[#560400] hover:bg-[#ef9d99]'>
                                <FaTwitter className='text-xl '/>
                                </a>
                                <a href="#home" className='bg-[#ffffff67] p-2 rounded-3xl mr-3 hover:text-[#560400] hover:bg-[#ef9d99]'>
                                <FaPinterestP className='text-xl '/>
                                </a>
                                <a href="#home" className='bg-[#ffffff67] p-2 rounded-3xl mr-3 hover:text-[#560400] hover:bg-[#ef9d99]'>
                                <FaLinkedinIn className='text-xl '/>
                                </a>
                            </div>
                        </aside>
                        <nav className=' lg:mx-0 mx-auto text-lg'>
                            <h6 className="footer-title mx-auto lg:mx-0">Services</h6>
                            <a className="link link-hover  mx-auto lg:mx-0">Branding</a>
                            <a className="link link-hover mx-auto lg:mx-0">Design</a>
                            <a className="link link-hover mx-auto lg:mx-0">Marketing</a>
                            <a className="link link-hover mx-auto lg:mx-0">Advertisement</a>
                        </nav>
                        <nav className=' lg:mx-0 mx-auto text-lg'>
                            <h6 className="footer-title mx-auto lg:mx-0">Company</h6>
                            <a className="link link-hover mx-auto lg:mx-0">About us</a>
                            <a className="link link-hover mx-auto lg:mx-0">Contact</a>
                            <a className="link link-hover mx-auto lg:mx-0">Jobs</a>
                            <a className="link link-hover mx-auto lg:mx-0">Press kit</a>
                        </nav>
                        <nav className=' lg:mx-0 mx-auto text-lg'>
                            <h6 className="footer-title mx-auto lg:mx-0">Legal</h6>
                            <a className="link link-hover mx-auto lg:mx-0">Terms of use</a>
                            <a className="link link-hover mx-auto lg:mx-0">Privacy policy</a>
                            <a className="link link-hover mx-auto lg:mx-0">Cookie policy</a>
                        </nav>
                    </footer>
                </div>
                <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Recipe Book</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;