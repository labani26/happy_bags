const Customer = require("../../models/Customer/UserSchema");

const updateUserDetails = async (req, res) => {
    const customerId = req.session._id; 
    const { address } = req.body; // Destructuring the address details from the request body
    if(!customerId) {
        return res.status(401).json({error: "Please login and proceed"})
    }

    try {
        // Find the user by their ID
        const customer = await Customer.findOneAndUpdate(
            {_id: customerId},
            {$set: {"address": address}},
            { new: true }
         )

        if (!customer) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(customer.email);
        console.log (customer.phone);
        
        // Respond with success
        res.status(200).json({ message: "Address updated successfully", customer });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
        console.log(error)
    }
};

module.exports = {  updateUserDetails };
