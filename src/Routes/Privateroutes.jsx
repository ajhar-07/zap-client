import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const Privateroutes = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation()

    if(loading){
        return <p>Loading...</p>
    }

    if(user && user.email){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Privateroutes;