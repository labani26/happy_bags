import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {

      // Get the token from cookies
      const token = Cookies.get('token');

      if (!token) {
        console.log("No token found. Cannot Logout.");
        alert('You are not logged in.');
        return;
      }
      // Make API call to the logout route with Authorization header
      const response = await axios.get('https://happy-bags-4.onrender.com/customer/logout', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // Check for successful logout response
      if (response.status === 200) {
        console.log('Logout successful.', response);
        alert('Logout successful.');

        // Remove the token from cookies
        Cookies.remove('token');

        navigate('/');

      } else {
        throw new Error('Logout failed');
      }

    } catch (error) {
      console.error("Logout failed", error.response ? error.response.data : error.message);
      alert('Failed to log out, please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;
