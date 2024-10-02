

const logout = (req, res) => {

    if (error) {
        return res.status(500).json({ message: "Failed to log out." });
    }

    // Optionally, clear the cookie for better session management
    // res.clearCookie('connect.sid', { path: '/' });

    res.status(200).json({ message: "Logout successful" })

 };

module.exports = { logout };
