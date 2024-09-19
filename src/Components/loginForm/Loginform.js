import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize navigate


  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the form from doing the default browser action (page reload)
  
    try {
      // Make a POST request to the login API
      const response = await axios.post('http://localhost:4000/user/signin', {
        emailOrPhone, password // Send the user's email/phone, password
  
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
      <h2 className='my-3'>Login</h2>
      <form onSubmit={handleSubmit}> 
        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="emailorphone" className="form-label">Email address or Phone number</label>
          <input
            type="text"
            className="form-control"
            id="emailOrPhone"
            value={emailOrPhone}
            onChange={(e)=> setEmailOrPhone(e.target.value)} // Update email/phone state
            aria-describedby="emailorphoneHelp"
            placeholder="Enter your email or phone number"
            required 
          />
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="Password1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Update password state
            placeholder="Enter your password"
            required 
          />
        </div>

        {/* Checkbox
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div> */}

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
