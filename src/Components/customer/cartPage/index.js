import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import CustNav from '../CustNav';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all cart items for the user
  const fetchCartItems = async () => {
    try {
      const token = Cookies.get('token');  // Get JWT token from cookies
      const response = await axios.get('http://192.168.1.9:4000/customer/getCustomerCart', {
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

  // Fetch product details for a cart item
  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(`http://192.168.1.9:4000/customer/getProductDetail/${productId}`);
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
      const response = await axios.get('http://192.168.1.9:4000/customer/profile', {
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
    const loadCartDetails = async () => {
      setLoading(true);

      const userDetails = await fetchUserDetails();
      if (userDetails) {
        setUser(userDetails);

        const cart = await fetchCartItems();
        if (Array.isArray(cart)) {
          const productDetailsPromises = cart.map(async (cartItem) => {
            const productDetails = await fetchProductDetails(cartItem.productId);
            return {
              ...cartItem,
              productDetails
            };
          });

          const detailedCartItems = await Promise.all(productDetailsPromises);
          setCartItems(detailedCartItems);
        } else {
          setCartItems([]);
        }
      }
      setLoading(false);
    };

    loadCartDetails();
  }, []);

  // Handle remove from cart
  const handleRemoveFromCart = async (cartItemId) => {
    try {
      const token = Cookies.get('token');
      await axios.delete(`http://192.168.1.9:4000/customer/removeFromCart/${cartItemId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setCartItems(cartItems.filter(item => item._id !== cartItemId));
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };

  // Handle Buy Now (redirect to a checkout page or process)
  const handleBuyNow = (cartItemId) => {
    // This could be a function to navigate to a checkout page or execute a purchase process
    console.log("Buying now for cart item ID:", cartItemId);
    // You could redirect to a checkout page or API to place an order here
    // e.g., navigate(`/checkout/${cartItemId}`);
  };

  return (
    <>
      <CustNav count={cartItems.length} userName={user?.name} />
      <div className="container">
        <h2 className="my-4">Your Cart</h2>
        
        {loading ? (
          <p>Loading your cart...</p>
        ) : cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="row">
            {cartItems.map((item, index) => (
              <div className="col-md-4 mb-4" key={item._id}>
                <div className="card h-100">
                  {item.productDetails ? (
                    <>
                      <img 
                        src={`http://192.168.1.9:4000${item.productDetails.image}`} 
                        alt={item.productDetails.name} 
                        className="card-img-top" 
                        style={{ height: '200px', objectFit: 'cover' }} 
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.productDetails.name}</h5>
                        <p className="card-text">{item.productDetails.description}</p>
                        <p className="card-text">Price: ${item.productDetails.price}</p>
                        <p className="card-text">
                          Added on: {new Date(item.cartTime).toLocaleDateString()}
                        </p>
                        <button 
                          className="btn btn-danger mb-2" 
                          onClick={() => handleRemoveFromCart(item._id)}  // Remove cart item
                        >
                          Remove from Cart
                        </button>
                        <button 
                          className="btn btn-primary mb-2" 
                          onClick={() => handleBuyNow(item._id)}  // Buy now button
                        >
                          Buy Now
                        </button>
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
      </div>
    </>
  );
};

export default CartPage;
