import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from '../assets/login.jpg';
import { FcGoogle } from "react-icons/fc";
import { Fade } from "react-awesome-reveal";
import { use, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
    const [error, setError] = useState(null);
    const { signin, setUser, user, setLoading, googleProvider, signInWithGoogle } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location,location.state);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password } = Object.fromEntries(formData.entries());
        signin(email, password)
            .then(result => {
                const loggedUser = result.user;
                Swal.fire({
                    title: "User logged in Successfully",
                    icon: "success",
                    draggable: true,
                    timer: 1500,
                    showConfirmButton: false
                });
                setUser(loggedUser);
                form.reset();
                navigate(`${location.state ? location.state : '/'}`);
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
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch((error) => {
                setError(error.code)
            })
    }
    return (
        <div className="flex justify-center items-center min-h-screen my-8">
            <div>
                <img className="w-[500px] h-[515px] object-cover lg:block hidden shadow-2xl rounded-md" src={loginImage} alt="" />
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <Fade direction="down" duration={1500} cascade damping={0.3}>
                    <p className="font-medium text-xs text-center mb-3 text-secondary">Welcome Back!</p>
                    <h2 className="font-semibold text-2xl text-center mx-5 text-primary">Login your Account</h2>
                </Fade>
                {/* <p className="text-xs text-center mt-2">Access to all features. No credit card required.</p> */}
                <form
                    onSubmit={handleLogin}
                    className="card-body">
                    <button onClick={() => { handleGoogleSignIn(googleProvider) }} className="btn w-full bg-success text-primary flex items-center"><FcGoogle />  Login with Google</button>
                    <div className="divider text-xs">Or continue with </div>
                    <fieldset className="fieldset">
                        {/* email */}
                        <label className="label font-bold text-base-200">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your email address"
                            required
                        />
                        {/* password */}
                        <label className="label font-bold text-base-200">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input border-none focus:outline-1 focus:outline-primary"
                            placeholder="Enter your password"
                            required
                        />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        {
                            error && <p className="text-red-500 text-xs">{error}</p>
                        }
                        <button type="submit" className="btn relative overflow-hidden group bg-[#c30a00] border border-[#c30a00] text-white mt-3
                    ">
                            {/* px-7 py-6 */}
                            <span className="absolute inset-0 bg-[#008000] transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
                            <span className="relative z-10">Login</span>
                        </button>
                        <p className="font-semibold text-center pt-4">Don’t Have An Account ? <Link to={'/register'} className="text-[#d90c00]">Register</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;