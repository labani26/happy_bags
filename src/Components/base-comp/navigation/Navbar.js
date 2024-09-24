


// const Navbar = (props) => {
//   const { count } = props; // Destructure the 'count' prop for the cart

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         {/* Brand and logo */}
//         <ul className="navbar-brand namelogo">
//           {/* Uncomment and use if the image is available */}
//           {/* <li><img src={bag} alt='Brand logo' className="logo" /></li> */}
//           <li>
//             <Link to="/" className="navbar-brand">H@ppy Bags :)</Link> {/* Corrected the Link component usage */}
//           </li>
//         </ul>

//         {/* Navbar toggle button for mobile view */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible part of the navbar */}
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           {/* Navbar links */}
//           <ul className="navbar-nav me-auto mb24 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link disabled" aria-disabled="true" to="/About">About</Link> {/* Use "#" when link is disabled */}
//             </li>
//             <li className="cart-menu-con nav-item">
//               Cart: <span className='nav-link'>{count}</span> {/* Display cart item count */}
//             </li>
//           </ul>

//           {/* Login and Signup buttons */}
//           <form className="d-flex">
//             <Link className="btn btn-primary mx-4 mb-3" to="/login" role="button">Login</Link>
//             <Link className="btn btn-primary mx-4" to="/signup" role="button">Signup</Link>
//           </form>
//           :
//           <button className="btn btn-primary"> Logout </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from "react-router-dom";


const Navbar = (props) => {
  const { count } = props;
  const navigate = useNavigate();


  const handleLogout = async () => {
    try {
      const response = await fetch('/customer/logoutWebsite',{
        method: 'POST',
        credentials: 'include'

      });

      if (response.ok) {
        sessionStorage.removeItem('session._id');

      console.log('Logout Successful:', response);
      alert('Logout successful!');
      navigate('/login'); 

    } else {
      alert('Failed to log out.');
    }

  } catch (error) {
    console.error("Error logging out:", error);
    alert('An error occurred while logging out.');
  }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <li>
          <Link className="navbar-brand" to="/">H@ppy Bags :)</Link>
        </li>
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
            <li className="cart-menu-con nav-item">
              Cart: <span className='nav-link'>{count}</span> {/* Display cart item count */}
            </li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-primary mx-4 mb-3" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-4 mb-3" to="/signup" role="button">Signup</Link>
          </form>
          <button className="btn btn-primary mx-4 mb-3" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
