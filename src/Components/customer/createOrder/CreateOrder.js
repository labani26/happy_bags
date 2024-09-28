import React, { useState } from 'react';
import axios from 'axios';

const CreateOrder = () => {
    const [productId, setProductId] = useState('');  // State to hold the product ID
    // const [message, setMessage] = useState('');      // State to hold success/error message

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://happy-bags.onrender.com/customer/createOrder', { productId });
            
            console.log('Order Successful:', response);
            alert('Order placed successfully!');

        } catch (error) {
            console.log('Failed to place order:', error);
            alert('Failed to place order. Please try again.');
        }
    };

    return (
        <div className="container mb-5">
            <h2 className="my-4">Place a New Order</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productId" className="form-label">Product</label>
                    <input
                        type="text"
                        id="productId"
                        className="form-control"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        placeholder="Enter Product"
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">Place Order</button>
            </form>

            {/* Show the success/error message */}
            {/* {message && <div className="alert alert-info mt-3">{message}</div>} */}
        </div>
    );
};

export default CreateOrder;
