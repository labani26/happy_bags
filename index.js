const express = require("express");
const MongoConnect = require("./controller/MongoConnect");
const UserRoutes = require("./routes/Customer/UserRoutes");
const AdminRoutes = require("./routes/Admin/AdminRoutes"); // Ensure this file exists and is correctly imported
const ProductRoutes = require("./routes/Admin/ProductRoutes");


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

MongoConnect(); // Ensure MongoConnect is correctly setting up your database connection

app.use("/user", UserRoutes);
app.use("/admin", AdminRoutes); // Added this line to correctly use AdminRoutes
app.use("/product", ProductRoutes);

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
