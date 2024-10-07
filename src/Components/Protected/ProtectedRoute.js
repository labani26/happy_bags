import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
    // Check if the JWT token exists in cookies
    const token = Cookies.get('token');

    // If no token, redirect to login
    if (!token) {
        return <Navigate to="/" />;
    }

    // Otherwise, render the children (protected component)
    return children;
};

export default ProtectedRoute;
