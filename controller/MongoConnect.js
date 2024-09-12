const mongoose = require('mongoose');

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://admin:admin@learning.zkyd2we.mongodb.net/?retryWrites=true&w=majority&appName=Learning');
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

module.exports = connectDB;
