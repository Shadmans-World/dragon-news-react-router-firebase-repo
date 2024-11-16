import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextApi/ContextApi';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }
    if(user){
        return children;
    }
    return (
         <Navigate state={location.pathname} to='/auth/login'></Navigate>
    );
};

export default PrivateRoute;