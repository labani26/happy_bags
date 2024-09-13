 const Product = require("../../models/Admin/ProductSchema");


const search = async (req, res) => {

    const { name, description, category, price, material, image, number_of_pocket, country_of_origin } = req.body;

    try {

        const searchProduct = await Product.find({ $or: [{ name }, { category }, { price }, {country_of_origin}, {material},] });

        return res.status(200).json({ message: "Here is your search", searchProduct});

    } catch(error) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { search }