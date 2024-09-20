const bcrypt = require('bcrypt');
const Customer = require('../../models/Customer/UserSchema');
const jwt = require('jsonwebtoken');
// const session = require("express-session");
const { json } = require('express');

const SECRET_KEY = "USERS_SECRET_KEY"; // Define a secret key

// Register new user
const signup = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await Customer.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new Customer({
            name,
            email,
            phone,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        // Generate a JWT token
        const token = jwt.sign({ id: newUser._id, email: newUser.email, phone: newUser.phone }, SECRET_KEY, { expiresIn: '1h' });

        // Respond with the created user and token
        res.status(201).json({ message: "User registered successfully", user: newUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const signin = async (req, res) => {
    // Destructure fields from request body
    const { email, phone, password } = req.body;


    // Validate fields
    if (email || phone) {
        if (!password) {
            return res.status(400).json({ message: "Email or phone number, password are required" });
        }
    }
    else {
        return res.status(400).json({ message: "Email or phone number, password are required" });
    }

    try {
        // Check if the user exists with either email or phone
        const existingUser = await Customer.findOne({ $or: [{ email: email }, { phone: phone }] });

        if (!existingUser) {
            return res.status(401).json({ message: "User not found" });
        }

        // Compare the password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Create a session for the user
        req.session._id = existingUser._id;
        console.log(req.session._id);


        // Send a success response
        return res.status(200).json({ message: "Login successful", user: req.session._id });

        // Generate a token
        // const token = jwt.sign(
        //     { email: existingUser.email, phone: existingUser.phone, id: existingUser._id },
        //     SECRET_KEY
        // );

        // // Send response with user data and token
        // return res.status(200).json({ existingUser, token })  

    } catch (error) {
        console.error("Signin Error: ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};



module.exports = { signup, signin };
