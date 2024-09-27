import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const PlaceOrderPage = () => {
  
  const [message, setMessage] = useState('');

  const location = useLocation();  //allows developers to access the location object within their react app
  const navigate = useNavigate();
  const productId = location.state?.productId; // Get the productId passed from the previous page (cart)

  // Redirect back to cart if no productId is passed
  useEffect(() => {
    if (!productId) {
      navigate('/cartPage', { replace: true }); // Redirect to cart page
    }
  }, [productId, navigate]);

  // Function to place order
  const handlePlaceOrder = async () => {
 
    setMessage('');
    console.log(productId);

    try {
      const token = Cookies.get('token'); // Get the user's JWT token

      // Send POST request to the backend to place an order
      await axios.post(
        'http://192.168.1.9:4000/customer/createOrder',
        { productId }, // Send productId in request body
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Include token in request headers
          },
        }
      );

      setMessage('Order placed successfully!'); 

      setTimeout(() => {
        navigate('/viewOrder'); // Redirect to orders page after 2 seconds
      }, 2000);

    } catch (error) {
      setMessage('Failed to place order. Please try again.');
      console.error('Error placing order:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Place Order</h2>
      {/* <p>Are you sure you want to place an order: {productId}?</p> */}
      <p>Are you sure you want to place an order: </p>
        <>
          {message && <p>{message}</p>}
          <button className="btn btn-primary" onClick={handlePlaceOrder}  style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Place Order
          </button>
        </>
      
    </div>
  );
};

export default PlaceOrderPage;
