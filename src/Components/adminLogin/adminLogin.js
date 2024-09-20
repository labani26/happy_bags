import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

  const [adminEmailOrPhone, setAdminEmailOrPhone] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate


  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the form from doing the default browser action (page reload)

    try {
      // Make a POST request to the login API
      const response = await axios.post('http://localhost:4000/admin/signin', {
        emailOrPhone: adminEmailOrPhone,  // Correct variable name
        password: adminPassword           // Correct variable name
      });

      // Handle successful login response
      console.log('Login Successful:', response);
      alert('Login successful!');

      // Navigate to the product listing or dashboard after successful login
      navigate('/'); // Change '/products' to the desired route

    } catch (error) {
      console.error('Login Error:', error);
      alert('Login failed, please try again.');
    }
  };

  return (
    <div className='container mb-3'>
      <h2 className='my-3'> Admin Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="adminEmailOrPhone" className="form-label">Email address or Phone number</label>
          <input
            type="text"
            className="form-control"
            id="adminEmailOrPhone"
            value={adminEmailOrPhone}
            onChange={(e) => setAdminEmailOrPhone(e.target.value)} // Update email/phone state
            aria-describedby="emailorphoneHelp"
            placeholder="Enter Admin email or phone number"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="adminPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="adminPassword"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}  // Update password state
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="grid text-center">
          <div className="submit"><button type="submit" className="btn btn-primary">Submit</button></div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
