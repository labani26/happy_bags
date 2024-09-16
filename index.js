const express = require("express");
const MongoConnect = require("./controller/MongoConnect");
const session = require("express-session")
const UserRoutes = require("./routes/Customer/UserRoutes");
const AdminRoutes = require("./routes/Admin/AdminRoutes"); // Ensure this file exists and is correctly imported
const ProductRoutes = require("./routes/Admin/ProductRoutes");
const GetAllProductRoutes = require("./routes/Admin/GetProductRoutes");
const OrderRoutes = require("./routes/Customer/OrderRoutes");
const LogoutRoutes = require("./routes/Customer/LogoutRoutes");
const SearchRoutes = require("./routes/Customer/SearchProductRoutes");
const CancelOrderRoutes = require("./routes/Customer/CancelOrderRoutes");
const GetAllOrderRoutes = require("./routes/Customer/GetAllOrderRoutes");
const AddToCartRoutes = require("./routes/Customer/AddToCartRoutes");


const app = express();


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

app.use("/user", UserRoutes);
app.use("/admin", AdminRoutes); // Added this line to correctly use AdminRoutes
app.use("/product", ProductRoutes);
app.use("/getProduct", GetAllProductRoutes);
app.use("/order",OrderRoutes);
app.use("/logout", LogoutRoutes);
app.use("/search", SearchRoutes);
app.use("/cancel", CancelOrderRoutes);
app.use("/getOrders", GetAllOrderRoutes);
app.use("/Cart", AddToCartRoutes);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
