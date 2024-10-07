const Customer = require("../../models/Customer/UserSchema");
const jwt = require('jsonwebtoken');
const SECRET_KEY = "HAPPY_BAGS";  // Use your secret key

const updateUserDetails = async (req, res) => {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1]; // Assuming 'Bearer TOKEN'

    if (!token) {
        return res.status(401).json({ error: "No token provided, please log in" });
    }

    try {
        // Verify the token and extract the user ID
        const decoded = jwt.verify(token, SECRET_KEY);
        const customerId = decoded.id; // Get user ID from the token

        // Destructure the address from the request body
        const { address } = req.body;

        if (!address) {
            return res.status(400).json({ error: "Address details are required" });
        }

        // Find the user by their ID and update their address
        const customer = await Customer.findOneAndUpdate(
            { _id: customerId },
            { $set: { "address": address } },
            { new: true }
        );

        if (!customer) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with success
        res.status(200).json({ message: "Address updated successfully", customer });
    } catch (error) {
        console.error("Update Error: ", error);
        res.status(500).json({ message: "Internal server error", error });
    }
};

module.exports = { updateUserDetails };
