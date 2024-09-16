const Cart = require("../../models/Customer/AddToCartSchema")

// Create an order for the logged-in user
const AddToCart = async (req, res) => {
    const { productId } = req.body;
    
    if (!req.session._id) {
        return res.status(401).json({ message: 'You must be logged in to place an order.' });
    }

    try {

         // Capture the current date and time for the order
         const cartTime = new Date();

        // Create a new order
        const newCart = new Cart({
            customerId: req.session._id, // Get the customer ID from the session
            productId: productId,
            cartStatus: "in-cart",
            cartTime: cartTime
        });

        await newCart.save();

        res.status(201).json({ message: 'Added to Cart', newCart });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add', error });
    }
};

// Get all orders for the logged-in user
const getCustomerCarts = async (req, res) => {
    if (!req.session._id) {
        return res.status(401).json({ message: 'You must be logged in to view your orders.' });
    }

    try {
        const carts = await Cart.find({ customerId: req.session._id });
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve cart items', error });
    }
};

module.exports = { AddToCart, getCustomerCarts };
  

