
const bcrypt = require('bcrypt');
const Admin = require('../../models/Admin/AdminSchema');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "ADMIN_SECRET_KEY"; // Define a secret key

// Register new user
const signup = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await Admin.findOne({ $or: [{ email }, { phone }] });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const AdminUser = new Admin({
            name,
            email,
            phone,
            password: hashedPassword
        });

        // Save the user to the database
        await AdminUser.save();

        // Generate a JWT token
        const token = jwt.sign({ id: AdminUser._id, email: AdminUser.email, phone: AdminUser.phone }, SECRET_KEY, { expiresIn: '1h' });

        // Respond with the created user and token
        res.status(201).json({ message: "User registered successfully", user: AdminUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const signin = async (req, res) => {
    // Destructure fields from request body
    const { email, phone, password } = req.body;

    // Validate fields
    if (!password || (!email && !phone)) {
        return res.status(400).json({ message: "Email or phone number, password are required" });
    }

    try {
        // Check if the user exists with either email or phone
        const existingUser = await Admin.findOne({ $or: [{ email }, { phone }] });

        if (!existingUser) {
            return res.status(401).json({ error: "User not found" });
        }

        // Compare the password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, existingUser.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

         // Create a session for the user
         req.session._id = existingUser._id;
         console.log(req.session._id);


        // Generate a token
        // const token = jwt.sign(
        //     { email: existingUser.email, phone: existingUser.phone, id: existingUser._id },
        //     SECRET_KEY
        // );

        // Send response with user data and token
        return res.status(200).json({ message: "Login successful", user: req.session._id});

    } catch (error) {
        console.error("Signin Error: ", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};



module.exports = { signup, signin};
