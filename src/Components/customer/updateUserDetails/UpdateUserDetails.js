import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
// import axios from 'axios';
import { useNavigate } from "react-router-dom";

// import api from '../../../api';

const UpdateUserDetails = () => {
    const [address, setAddress] = useState({ state: '', city: '', zipCode: '', land_mark: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Get the token from the cookies
            const token = Cookies.get('token');

            // Make a request to update the address with the token in the header
            const response = await axios.post(
                'http://localhost:4000/customer/updateUserDetails',
                { address },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,  // Add the token here
                    },
                }
            );

            setMessage('Address updated successfully!',response);
            alert(message)
            navigate("/cartPage");
        } catch (error) {
            console.error('Error updating address:', error);
            setMessage('Failed to update address');
        }
    };

    return (
        <div className="container mb-5">
            <h2 className='my-4'>Update User Details</h2>
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6 mb-3">
                    <label htmlFor="state" className="form-label">State:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={address.state}
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
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
                        value={address.city}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
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
                        value={address.zipCode}
                        onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
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
                        value={address.land_mark}
                        onChange={(e) => setAddress({ ...address, land_mark: e.target.value })}
                        placeholder="Land Mark"
                        required
                    />
                </div>
                <div className="grid text-center mt-3">
                    <button className="btn btn-primary" type="submit">Update Address</button>
                </div>
            </form>
            {/* <div className="grid text-center mt-3">
                <button className="btn btn-secondary" type="button" onClick={clickToContinue}>Continue</button>
            </div> */}
        </div>
    );
};

export default UpdateUserDetails;
