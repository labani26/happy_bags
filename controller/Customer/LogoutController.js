

const logout = (req, res) => {

    if(req.session._id) {
        req.session.destroy((error) => {

            if (error) {
                return res.status(500).json({ message: "Failed to log out." });
            }
    
            // Optionally, clear the cookie for better session management
            // res.clearCookie('connect.sid', { path: '/' });
    
            res.status(200).json({ message: "Logout successful" });
        });

    }
    else {
        return res.status(500).json({ error: "No one logged in" });
    }
};

module.exports = {logout};
