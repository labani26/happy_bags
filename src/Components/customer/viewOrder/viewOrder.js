import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import CustNav from '../CustNav';
// import CustNav from '../CustNav';
// import { useNavigate } from "react-router-dom";

const ViewOrder = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

  // Fetch all order items for the user
  const fetchOrderItems = async () => {
    try {
      const token = Cookies.get('token');  // Get JWT token from cookies
      const response = await axios.get('https://happy-bags-4.onrender.com/customer/getCustomerOrder', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching order items", error);
      return [];
    }
  };

  // Fetch product details for a cart item
  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(`https://happy-bags-4.onrender.com/customer/getProductDetail/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product details", error);
      return null;
    }
  };

  // Fetch user details
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

  // Load cart items and product details
  useEffect(() => {
    const loadOrderDetails = async () => {
      setLoading(true);

      const userDetails = await fetchUserDetails();
      if (userDetails) {
        setUser(userDetails);

        const cart = await fetchOrderItems();
        if (Array.isArray(cart)) {
          const productDetailsPromises = cart.map(async (cartItem) => {
            const productDetails = await fetchProductDetails(cartItem.productId);
            return {
              ...cartItem,
              productDetails
            };
          });

          const detailedCartItems = await Promise.all(productDetailsPromises);
          setOrderItems(detailedCartItems);
        } else {
          setOrderItems([]);
        }
      }
      setLoading(false);
    };

    loadOrderDetails();
  }, []);


  // Handle Buy Now (redirect to a checkout page or process)
//   const buyNow = (productId) => {
//     // Redirect to the update user details page with the productId in the state
//     navigate('/updateUserDetails', { state: { productId } });
//   };

  // Handle Place Order (redirect to a checkout page or process all items)
//   const placeOrder = () => {
//     const productIds = orderItems.map(item => item.productDetails._id);
//     navigate('/updateUserDetails', { state: { productIds } });  // Assuming you want to place all items in the order
//   };

  return (
    <>
    
      <div className="container">
      <CustNav />
        <h2 className="my-4">Your Orders</h2>

        {loading ? (
          <p>Loading your orders...</p>
        ) : orderItems
.length === 0 ? (
          <p>No order placed yet..</p>
        ) : (
          <div className="row">
            {orderItems
    .map((item, index) => (
              <div className="col-md-4 mb-4" key={item._id}>
                <div className="card h-100">
                  {item.productDetails ? (
                    <>
                      <img
                        src={`https://happy-bags-4.onrender.com${item.productDetails.image}`}
                        alt={item.productDetails.name}
                        className="card-img-top"
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.productDetails.name}</h5>
                        <p className="card-text">{item.productDetails.description}</p>
                        <p className="card-text">Price: Rs:{item.productDetails.price}</p>
                        <p className="card-text">
                          Added on: {new Date(item.orderTime).toLocaleDateString()}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p>Loading product details...</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
        {orderItems
.length > 0 && (
          <div className='container'>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewOrder;
