const Customer = require("../../models/Customer/UserSchema");

const getUserDetails = async (req, res) => {
    try {
        // Fetch the user's ID from the token data (already attached by the middleware)
        const userId = req.user.id;

        // Find the user in the database
        const customer = await Customer.findById(userId);

        if (!customer) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return the user details
        res.status(200).json({
            id: customer._id,
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            address: customer.address
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getUserDetails };
