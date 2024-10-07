const express = require("express");
const MongoConnect = require("./controller/MongoConnect");
const UserRoutes = require("./routes/Customer/UserRoutes");
const AdminRoutes = require("./routes/Admin/AdminRoutes"); // Ensure this file exists and is correctly imported
const ProductRoutes = require("./routes/Admin/ProductRoutes");
const FetchAllOrderRoutes = require("./routes/Admin/FetchAllOrderRoutes");
const OrderRoutes = require("./routes/Customer/OrderRoutes");
const LogoutRoutes = require("./routes/Customer/LogoutRoutes");
const SearchRoutes = require("./routes/Customer/SearchProductRoutes");
const CancelOrderRoutes = require("./routes/Customer/CancelOrderRoutes");
const GetMyOrderRoutes = require("./routes/Customer/GetMyOrderRoutes");
const AddToCartRoutes = require("./routes/Customer/AddToCartRoutes");
const GetAllProductRoutes = require("./routes/Customer/GetAllProductRoutes")
const GetProductByIdRoute = require("./routes/Customer/getProductByIdRoute")
const path = require('path');
const app = express();
const cors = require('cors');
// const getAllProduct = require("./controller/Customer/GetProductController");
const passport = require('passport');
const session = require('express-session');
require('./passportConfig');


app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'images')));

app.use(cors({
    origin: '*', // Replace with your actual frontend URL
    credentials: true,
    methods: ['POST', 'PATCH', 'GET', 'OPTIONS', 'DELETE']
}));
  app.use(session({
    secret: 'HAPPY_BAGS_SECRET',
    resave: false,
    saveUninitialized: false, // Change this to false for better control over session creation
    cookie: {
        sameSite: 'None',
        secure: false, // Set to true if using HTTPS
        httpOnly: true,
        maxAge: 1000 * 60 * 60 // 1 hour
    }
}));

//build
// app.use('/app', express.static(path.join(__dirname, 'public')));

// app.get('/app/bags*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
//build
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // Find the user by ID from your database
    Customer.findById(id, (err, user) => {
        done(err, user);
    });

});

app.use((req, res, next) => {
    console.log("HTTP Method - "+ req.method + " , URL - " + req.url +  "Current Session:", req.session);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

MongoConnect(); // Ensure MongoConnect is correctly setting up your database connection

// app.use("/customer", LogoutRoutes);
app.use("/admin", AdminRoutes); 
app.use("/admin", ProductRoutes);
app.use("/admin", FetchAllOrderRoutes);
app.use("/customer", UserRoutes);
app.use("/customer",OrderRoutes);
app.use("/customer", SearchRoutes);
app.use("/customer", CancelOrderRoutes);
// app.use("/customer", GetMyOrderRoutes);
app.use("/customer", AddToCartRoutes);
app.use("/customer", GetAllProductRoutes);
app.use("/customer", GetProductByIdRoute)
// app.use("/customer", UpdateUserDetailsRoutes);
// app.use("/FetchAllOrder", FetchAllOrderRoutes);


app.listen(4000, '0.0.0.0', () => {
    console.log("Server is running on port 4000");
});
