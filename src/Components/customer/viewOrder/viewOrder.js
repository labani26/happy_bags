import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const ViewOrderPage = () => {
  const [orders, setOrders] = useState([]);

  // Fetch all orders for the logged-in user
  const fetchOrders = async () => {
    try {
      const token = Cookies.get('token'); // Get the user's JWT token
      const response = await axios.get('http://192.168.1.9:4000/customer/getCustomerOrders', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      setOrders(response.data); // Set the orders in state
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders(); // Fetch orders when component mounts
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              Order ID: {order._id}, Product ID: {order.productId}, Status: {order.orderStatus}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewOrderPage;
