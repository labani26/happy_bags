import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const navigate = useNavigate(); // Initialize navigate


  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the form from doing the default browser action (page reload)

    try {
      // Make a POST request to the login API
      const response = await axios.post('http://192.168.1.9:4000/admin/signin', {
        email: email,  // Correct variable name
        password: password           // Correct variable name
      });

      // Handle successful login response
      console.log('Login Successful:', response);
      alert('Login successful!');

      // Navigate to the product listing or dashboard after successful login
      navigate('/addProduct'); // Change '/products' to the desired route

    } catch (error) {
      console.error('Login Error:', error);
      alert("Something went error :" ,error);
    }
  };

  const handleRoueAdminSignup = () => {
    navigate("/adminSignup")
  }

  return (
    <div className='container mb-3'>
      <h2 className='my-3'><u>Admin Login</u> </h2>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address or Phone number</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)} // Update email/phone state
            aria-describedby="emailorphoneHelp"
            placeholder="Enter Admin email or phone number"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}  // Update password state
            placeholder="Enter your password"
            required
          />
        </div>
        <div className='row'>
        <div className="grid text-center col-md-4">
          <div className="submit"><button type="submit" className="btn btn-primary">Submit</button></div>
        </div>
        <div className="grid text-center col-md-4">
          <div className="submit"><button type="button" onClick={handleRoueAdminSignup} className="btn btn-primary">Sign up</button></div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
