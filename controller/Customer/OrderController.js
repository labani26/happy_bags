const Order = require("../../models/Customer/OrderSchema")

// Create an order for the logged-in user
const createOrder = async (req, res) => {
    const { productId } = req.body;
    
    if (!req.session._id) {
        return res.status(401).json({ message: 'You must be logged in to place an order.' });
    }

    try {

         // Capture the current date and time for the order
         const orderTime = new Date();

        // Create a new order
        const newOrder = new Order({
            customerId: req.session._id, // Get the customer ID from the session
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
    if (!req.session._id) {
        return res.status(401).json({ message: 'You must be logged in to view your orders.' });
    }

    try {
        const orders = await Order.find({ customerId: req.session._id }).populate('items.productId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve orders', error });
    }
};

module.exports = { createOrder, getCustomerOrders };
  

