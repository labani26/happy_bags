import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const CustNav = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the cart items from the server
  const fetchCartItems = async () => {
    try {
      const token = Cookies.get('token');  // Get JWT token from cookies
      const response = await axios.get('https://happy-bags-4.onrender.com/customer/getCustomerCart', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching cart items", error);
      return [];
    }
  };

  // Fetch the user details (including username) from the server
  const fetchUserDetails = async () => {
    try {
      const token = Cookies.get('token');  // Get JWT token from cookies
      const response = await axios.get('https://happy-bags-4.onrender.com/customer/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user details", error);
      return null;
    }
  };

  // Load cart details and user details on component mount
  useEffect(() => {
    const loadCartDetails = async () => {
      setLoading(true);

      const userDetails = await fetchUserDetails();
      if (userDetails) {
        setUser(userDetails);  // Set user details (which includes username)

        const cart = await fetchCartItems();
        setCartItems(cart);
      }
      
      setLoading(false);
    };

    loadCartDetails();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">H@ppy Bags :)</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/Bay">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/cartPage" className="nav-link active">Cart: {cartItems.length}</Link>
            </li>
            <li className="nav-item">
              <Link to="/viewOrder" className="nav-link active">Your Orders</Link>
            </li>
          </ul>          
          <li className="nav-item">
            <h4>Welcome {user?.name || 'Guest'}</h4> {/* Display the username or "Guest" */}
          </li>
        </div>
      </div>
    </nav>
  );
};

export default CustNav;
