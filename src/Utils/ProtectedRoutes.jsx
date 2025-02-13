import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import './ProtectedRoutes.css'

const ProtectedRoutes = () => {
    const authStatus = useSelector((state) => state.auth.status);

    return authStatus === true ? <Outlet /> : authStatus === false ? <Navigate to='/login' /> : <div id="loading">Loading...</div>

}

export default ProtectedRoutes