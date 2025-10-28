import { Link } from "react-router-dom";
import loginImage from '../assets/login.jpg';
import { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Fade } from "react-awesome-reveal";
const Register = () => {
    const { createUser,setUser,user } = use(AuthContext)
console.log(user);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const user = Object.fromEntries(formData.entries());
        // console.log(user);
        createUser(user.email, user.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                // form.reset();
                setUser(createdUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <div>
                    <Fade direction="down" duration={1500} cascade damping={0.3}>
                        <p className="font-medium text-xs text-center mb-3 text-secondary">Register </p>
                        <h2 className="font-semibold text-3xl text-center mx-5 text-">Start for from Today</h2>
                    </Fade>
                    <form
                        onSubmit={handleRegister}
                        className="card-body">
                        <fieldset className="fieldset">
                            {/* <button className="btn w-full bg-white flex items-center"><FcGoogle />  Register with Google</button>
                        <div className="divider text-xs">Or continue with </div> */}
                            {/* Name */}
                            <label className="label font-bold text-base-200">Name</label>
                            <input
                                name='name'
                                type="text"
                                className="input border-none focus:outline-1 focus:outline-primary"
                                placeholder="Enter your name"
                                required
                            />
                            {/* {
                            nameError && <p className='text-xs text-accent'>{nameError}</p>
                        } */}
                            {/* email */}
                            <label className="label font-bold text-base-200">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input border-none focus:outline-1 focus:outline-primary"
                                placeholder="Enter your email address"
                                required
                            />
                            {/* photo url */}
                            <label className="label font-bold text-base-200 ">Photo URL</label>
                            <input
                                name='photo'
                                type="text"
                                className="input border-none focus:outline-1 focus:outline-primary"
                                placeholder="Enter your photo URL"
                                required
                            />
                            {/* password */}
                            <label className="label font-bold text-base-200">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input border-none focus:outline-1 focus:outline-primary"
                                placeholder="Enter your password"
                                required
                            />
                            {/* {
                            error && <p className="text-accent text-xs">{error}</p>
                        } */}
                            <button className="btn relative overflow-hidden group bg-[#c30a00] border border-[#c30a00] text-white mr-2 mt-3" type="submit">
                                {/* px-7 py-6 */}
                                <span className="absolute inset-0 bg-[#008000] transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
                                <span className="relative z-10">Register</span>
                            </button>
                            <p className="font-semibold text-center pt-4">Already Have An Account ? <Link to={'/login'} className="text-[#d90c00]">Login</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div>
                <img className="w-[500px] h-[530px] object-cover lg:block hidden shadow-2xl rounded-md" src={loginImage} alt="" />
            </div>
        </div>
    );
};
export default Register;