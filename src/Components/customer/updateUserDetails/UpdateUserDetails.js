import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UpdateUserDetails = () => {
    const [address, setAddress] = useState({
        state: '',
        city: '',
        zipCode: '',
        land_mark: ''
    });

    const navigate = useNavigate(); 

    // Handle input changes for the address form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value,
        });
    };

    // Navigate to the createOrder page
    const clickToContinue = () => {
        navigate('/createOrder');
    };

    // Submit the form data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/customer/updateUserDetails', { address });
            console.log('Update successful:', response);
            alert('Update successful!');
        } catch (error) {
            console.error('Update Error:', error);
            alert(error);
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                        placeholder="Land Mark"
                        required
                    />
                </div>
                <div className="grid text-center mt-3">
                    <button className="btn btn-primary" type="submit">Update Address</button>
                </div> 
            </form>
            <div className="grid text-center mt-3">
                <button className="btn btn-secondary" type="button" onClick={clickToContinue}>Continue</button>
            </div>
        </div>
    );
};

export default UpdateUserDetails;
