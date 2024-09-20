const express = require("express");
const MongoConnect = require("./controller/MongoConnect");
const session = require("express-session")
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
const path = require('path');

const cors = require('cors');
// const getAllProduct = require("./controller/Customer/GetProductController");

const app = express();
app.use('/static', express.static(path.join(__dirname, 'images')));

app.use(cors());
app.use(session({
    secret: 'HAPPY_BAGS_SECRET',
    resave: false,
    saveUninitialized: true,
}))

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

MongoConnect(); // Ensure MongoConnect is correctly setting up your database connection

app.use("/user", LogoutRoutes);
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
// app.use("/customer", UpdateUserDetailsRoutes);
// app.use("/FetchAllOrder", FetchAllOrderRoutes);


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
