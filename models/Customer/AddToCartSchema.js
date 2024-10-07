const mongoose = require('mongoose');

const AddToCartSchema = new mongoose.Schema({
   
    customerId: {
        type: String,
        required: true  
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true 
    },
    cartStatus: {
        type: String,
        required: true ,
        default: 'pending'
    },
    cartTime: {
        type: Date,
        default: Date.now
    }
  
});

const Cart = mongoose.model('Cart', AddToCartSchema );

module.exports = Cart;
