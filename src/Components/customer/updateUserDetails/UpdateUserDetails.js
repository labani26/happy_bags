import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useLocation, useNavigate } from "react-router-dom";

const UpdateUserDetails = () => {
    const [currentAddress, setCurrentAddress] = useState({ state: '', city: '', zipCode: '', land_mark: '' });
    const [newAddress, setNewAddress] = useState({ state: '', city: '', zipCode: '', land_mark: '' });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    // Fetch user details (including address) from the server
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

    useEffect(() => {
        const loadUserDetails = async () => {
            setLoading(true);

            const userDetails = await fetchUserDetails();
            if (userDetails && userDetails.address) {
                setCurrentAddress(userDetails.address); // Set the current address only for display
            }
            setLoading(false);
        };
        loadUserDetails();
    }, []); // Runs only once on component mount

    // Handle the address update form submission
    const handleUpdateAddress = async (e) => {
        e.preventDefault();
        try {
            const token = Cookies.get('token');  // Get JWT token from cookies

            // Send POST request to update the user address with the new address entered in the form
            await axios.post(
                'https://happy-bags-4.onrender.com/customer/updateUserDetails',
                { address: newAddress },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,  // Include token in headers
                    },
                }
            );

            setMessage('Address updated successfully!');
            const productId = location.state?.productId;
            const cartId = location.state?.cartId;

            // Navigate to the order page after successful address update
            setTimeout(() => {
                navigate('/placeOrderPage', {
                    state: {
                        productId: productId,
                        cartId: cartId
                    }
                });
            }, 1000);

        } catch (error) {
            console.error('Error updating address:', error);
            setMessage('Failed to update address');
        }
    };

    const handlePlaceOrder = (e) => {
        const productId = location.state?.productId;
        const cartId = location.state?.cartId;
        setTimeout(() => {
            navigate('/placeOrderPage', {
                state: {
                    productId: productId,
                    cartId: cartId
                }
            });
        }, 1000);
    }

    // Display loading message if the data is still being fetched
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mb-5">
            <div className='row'>
                <h2>Your current address:</h2>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="row">
                        <div className='col-md-4'>
                            <h4>State: </h4>
                        </div>
                        <div className='col-md-4'>
                            <p>{currentAddress.state || 'Not available'}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="row">
                        <div className='col-md-4'>
                            <h4>City: </h4>
                        </div>
                        <div className='col-md-4'>
                            <p>{currentAddress.city || 'Not available'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="row">
                        <div className='col-md-4'>
                            <h4>Postal Code: </h4>
                        </div>
                        <div className='col-md-4'>
                            <p>{currentAddress.zipCode || 'Not available'}</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="row">
                        <div className='col-md-4'>
                            <h4>Land Mark: </h4>
                        </div>
                        <div className='col-md-4'>
                            <p>{currentAddress.land_mark || 'Not available'}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid text-center mt-3">
                <button className="btn btn-primary" onClick={handlePlaceOrder} type="button">Use same address</button>
            </div>
            <h2 className='my-4'>Enter New Address</h2>
            <form className="row g-3">
                <div className="col-md-6 mb-3">
                    <label htmlFor="state" className="form-label">State:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={newAddress.state}
                        onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                        placeholder="State"
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                        placeholder="City"
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="zipCode" className="form-label">Zip Code:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="zipCode"
                        value={newAddress.zipCode}
                        onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                        placeholder="Zip Code"
                        required
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="land_mark" className="form-label">Land Mark:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="land_mark"
                        value={newAddress.land_mark}
                        onChange={(e) => setNewAddress({ ...newAddress, land_mark: e.target.value })}
                        placeholder="Land Mark"
                        required
                    />
                </div>
                <div className="grid text-center mt-3">
                    <button className="btn btn-primary" onClick={handleUpdateAddress} type="button">Update Address</button>
                </div>
            </form>

            {/* Show success or error message */}
            {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
    );
};

export default UpdateUserDetails;
