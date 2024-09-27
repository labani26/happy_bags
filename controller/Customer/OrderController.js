const Order = require("../../models/Customer/OrderSchema")
const jwt = require('jsonwebtoken');
const SECRET_KEY = "HAPPY_BAGS"; // Use your secret key


const getUserIdFromToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded.id; // Assuming the user ID is stored as 'id' in the JWT payload
    } catch (error) {
        return null;
    }
};

// Create an order for the logged-in user
const createOrder = async (req, res) => {
    const { productId } = req.body;
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN format

    const customerId = getUserIdFromToken(token);
    if (!customerId) {
        return res.status(401).json({ message: 'You must be logged in to place an order.' });
    }

    try {

         // Capture the current date and time for the order
         const orderTime = new Date();

        // Create a new order
        const newOrder = new Order({
            customerId: customerId, // Get the customer ID from the session
            productId: productId,
            orderStatus: "not delivered",
            paymentStatus: "pending",
            orderTime: orderTime
        });

        await newOrder.save();

        res.status(201).json({ message: 'Order placed successfully', newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Failed to place order', error });
    }
};

// Get all orders for the logged-in user
const getCustomerOrders = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN format
    const customerId = getUserIdFromToken(token);
    if (!customerId) {
        return res.status(401).json({ message: 'You must be logged in to view your cart.' });
    }

    try {
        const orders = await Order.find({ customerId: req.session._id });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve orders', error });
    }
};

module.exports = { createOrder, getCustomerOrders };
  

