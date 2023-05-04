import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <Spinner animation="border" variant="info" />
    }


    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;