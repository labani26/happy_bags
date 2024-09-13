const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
   
    customerId: {
        type: String,
        required: true  
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true 
    },
    orderStatus: {
        type: String,
        required: true ,
        default: 'pending'
    },
    paymentStatus: {
        type: String,
        required: true ,
        default: 'pending'
    },
    orderTime: {
        type: Date,
        default: Date.now
    }
  
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
