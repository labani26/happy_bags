const jwt = require('jsonwebtoken');
const SECRET_KEY = "HAPPY_BAGS";  // Use your secret key

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN format

    if (!token) {
        return res.status(401).json({ error: "No token provided, please log in" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;  // Attach user data to request object
        next();
    } catch (error) {
        return res.status(403).json({ error: "Invalid or expired token" });
    }
};

module.exports = isAuthenticated;
