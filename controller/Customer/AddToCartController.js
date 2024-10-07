const Cart = require("../../models/Customer/AddToCartSchema");
const jwt = require('jsonwebtoken');
const SECRET_KEY = "HAPPY_BAGS"; // Use your secret key

// Helper function to decode JWT and extract user ID
const getUserIdFromToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded.id; // Assuming the user ID is stored as 'id' in the JWT payload
    } catch (error) {
        return null;
    }
};

// Create an order for the logged-in user
const AddToCart = async (req, res) => {
    const { productId } = req.body;
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN format

    const customerId = getUserIdFromToken(token);
    if (!customerId) {
        return res.status(401).json({ message: 'You must be logged in to place an order.' });
    }

    try {
        // Capture the current date and time for the order
        const cartTime = new Date();

        // Create a new cart item
        const newCart = new Cart({
            customerId: customerId, // Get the customer ID from the token
            productId: productId,
            cartStatus: "in-cart",
            cartTime: cartTime
        });

        await newCart.save();
        res.status(201).json({ message: 'Added to Cart', newCart });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add to cart', error });
    }
};

// Get all carts for the logged-in user
const getCustomerCarts = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN format
    const customerId = getUserIdFromToken(token);
    if (!customerId) {
        return res.status(401).json({ message: 'You must be logged in to view your cart.' });
    }

    try {
        const carts = await Cart.find({ customerId: customerId });
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve cart items', error });
    }
};

// Remove an item from the cart
const removeFromCart = async (req, res) => {
    const { cartItemId } = req.params; // Expecting the cart item ID in the URL
    const token = req.headers.authorization?.split(" ")[1]; // Bearer TOKEN format
    const customerId = getUserIdFromToken(token);
    
    if (!customerId) {
        return res.status(401).json({ message: 'You must be logged in to remove an item from the cart.' });
    }

    try {
        const result = await Cart.findOneAndDelete({ _id: cartItemId, customerId: customerId });
        
        if (!result) {
            return res.status(404).json({ message: 'Cart item not found.' });
        }

        res.status(200).json({ message: 'Item removed from cart successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to remove item from cart', error });
    }
};

module.exports = { AddToCart, getCustomerCarts, removeFromCart };
