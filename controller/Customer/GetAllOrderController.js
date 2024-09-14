const Order = require("../../models/Customer/OrderSchema");

const getAllOrder = async (req,res) => {

        if (!req.session._id) {
            return res.status(401).json({ message: 'You must be logged in to view your order.' });
        } 

    try{
        const getOrder = await Order.find({ customerId: req.session._id });

        if(!getOrder) {
            return res.status(404).json({ message: 'Orders retrieved successfully', getOrder})
        }

        res.send(result);

    } catch (error) {
        return res.status(500).json({ message: 'Failed to  retrive orders', error });
    }
}
module.exports = {getAllOrder};