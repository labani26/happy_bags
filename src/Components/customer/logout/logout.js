import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const logout = () => {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {

            const response = await axios.get('https://happy-bags-4.onrender.com/customer/logoutWebsite', {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              });
              console.log('Logout successful.', response);
              alert('Logout successful.');
  
              navigate('/');

        }catch (error) {
            console.error("Logout failed", error);
            alert('Failed to log out, please try again.');
        }
    };

  return (
    <div className="container mt-4">
        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default logout;