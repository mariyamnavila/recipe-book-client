import { useContext } from "react";
import Loading from "../Pages/Loading";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children
};

export default PrivateRoute;