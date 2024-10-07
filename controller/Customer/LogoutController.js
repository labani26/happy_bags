

// const logout = (req, res) => {

//     if (error) {
//         return res.status(500).json({ message: "Failed to log out." });
//     }

//     // Optionally, clear the cookie for better session management
//     // res.clearCookie('connect.sid', { path: '/' });

//     res.status(200).json({ message: "Logout successful" })

//  };

// module.exports = { logout };

const logout = (req, res) => {
    try {

       // Simply respond that the logout was successful
      return res.status(200).json({ message: "Logout successful" });
  
    } catch (error) {
        console.error('Error during logout:', error);
        return res.status(500).json({ message: "An error occurred during logout." });
      }
  };
  
  module.exports = { logout };
  