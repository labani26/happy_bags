
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { ReactSession } from 'react-client-session';
import Cookies from 'js-cookie';

const Navbar = (props) => {
  const { count } = props;


  // const handleLogout = async () => {
  //   try {
  //     const response = await fetch('/customer/logoutWebsite', {
  //       method: 'POST',
  //       credentials: 'include'

  //     });

  //     if (response.ok) {
  //       sessionStorage.removeItem('session._id');

  //       console.log('Logout Successful:', response);
  //       alert('Logout successful!');
  //       navigate('/login');

  //     } else {
  //       alert('Failed to log out.');
  //     }

  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //     alert('An error occurred while logging out.');
  //   }
  // }

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate
  const handleAdminRoute = () => {
    navigate("/adminLogin")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/customer/signin', {
        email: emailOrPhone.includes('@') ? emailOrPhone : null,
        phone: emailOrPhone.includes('@') ? null : emailOrPhone,
        password,
      });

      // Get the token from response
      const token = response.data.token;

      // Set the JWT token to cookies (with expiration)
      Cookies.set('token', token, { expires: 1, secure: true });  // 'secure: true' for HTTPS only

      // Redirect or do something on successful login
      alert('Login successful!');
      console.log('Token set in cookie:', token);
      navigate("/Bay")

    } catch (error) {
      setError('Invalid credentials or server error');
      console.error(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">H@ppy Bags :)</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <span className='nav-link active'>Cart: {count}</span> {/* Display cart item count */}
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <b><button className="nav-link active " data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button></b>
            </li>
            <li className="nav-item">
              <b><Link className="nav-link active" to="/signup">Signup</Link></b>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" onClick={handleLogout}>Logout</Link>
            </li></ul> */}
          </ul>
        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1>Login</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="emailOrPhone"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)} // Update email/phone state
                      aria-describedby="emailHelp"
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
                  <div className="grid text-center">
                    <div className="submit"><button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button></div>
                    {error && <p>{error}</p>}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="submit"><button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Close</button></div>
                <div className="submit"><button type="button" onClick={handleAdminRoute} className="btn btn-primary" data-bs-dismiss="modal">I am Admin</button></div>
                {/* <div className="container"><p><Link to="/adminLogin" className="my-link-class" data-bs-dismiss="modal">Admin Login</Link></p></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
