import { Link, useNavigate } from "react-router-dom";
import loginImage from '../assets/login.jpg';
import { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
    const [error, setError] = useState([])
    const { createUser, setUser, user, setLoading, updateUser, signInWithGoogle, googleProvider } = use(AuthContext)
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, name, photo } = Object.fromEntries(formData.entries());
        createUser(email, password)
            .then(result => {
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        Swal.fire({
                            title: "User Created Successfully",
                            icon: "success",
                            draggable: true,
                            timer: 1500,
                            showConfirmButton: false
                        });
                        navigate('/')
                    })
                    .catch((error) => {
                        setError(error);
                        setUser(user)
                    })
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const handleGoogleSignIn = (provider) => {
        signInWithGoogle(provider)
            .then(result => {
                const name = result?.user?.displayName
                const photo = result?.user?.photoURL
                setUser({ ...user, displayName: name, photoURL: photo })
            })
            .catch((error) => {
                setError(error.code)
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
                        <button onClick={() => { handleGoogleSignIn(googleProvider) }} className="btn w-full bg-success text-primary flex items-center"><FcGoogle />  Login with Google</button>
                        <div className="divider text-xs">Or continue with </div>
                        <fieldset className="fieldset">
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
                            {
                                error && <p className="text-red-500 text-xs">{error}</p>
                            }
                            <button className="btn relative overflow-hidden group bg-[#c30a00] border border-[#c30a00] text-white mr-2 mt-3" type="submit">
                                <span className="absolute inset-0 bg-[#008000] transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
                                <span className="relative z-10">Register</span>
                            </button>
                            <p className="font-semibold text-center pt-4">Already Have An Account ? <Link to={'/login'} className="text-[#d90c00]">Login</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div>
                <img className="w-[500px] h-[640px] object-cover lg:block hidden shadow-2xl rounded-md" src={loginImage} alt="" />
            </div>
        </div>
    );
};
export default Register;