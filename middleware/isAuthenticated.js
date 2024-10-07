const jwt = require('jsonwebtoken');
const SECRET_KEY = "HAPPY_BAGS";  // Use your secret key

<<<<<<< HEAD
// In-memory blacklist for tokens
const blacklist = new Set();

=======
>>>>>>> c5fb60db2ba48f1b2b157bbd0f21b39a1c6b4696
const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN format

    if (!token) {
        return res.status(401).json({ error: "No token provided, please log in" });
    }

<<<<<<< HEAD
    // Check if the token is blacklisted
    if (blacklist.has(token)) {
        return res.status(403).json({ error: "Token is blacklisted. Please log in again." });
    }

=======
>>>>>>> c5fb60db2ba48f1b2b157bbd0f21b39a1c6b4696
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;  // Attach user data to request object
        next();
    } catch (error) {
        return res.status(403).json({ error: "Invalid or expired token" });
    }
};

<<<<<<< HEAD
// Expose the blacklist for use in the logout function
module.exports = { isAuthenticated, blacklist };
=======
module.exports = isAuthenticated;
>>>>>>> c5fb60db2ba48f1b2b157bbd0f21b39a1c6b4696
