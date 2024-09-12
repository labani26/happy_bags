const Product = require('../../models/Admin/ProductSchema');

const addProduct = async (req, res) => {
    const { name, description, category, price, material, image, number_of_pocket, country_of_origin } = req.body;

    try {


        // Add a new Product
        const ProductUpload = new Product ({
            name,
            description, 
            category, 
            price, 
            material, 
            image,
            number_of_pocket, 
            country_of_origin
        });
        
        // Save the product to the database
        await ProductUpload.save()
        res.status(200).json({"message": "Product uploaded"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { addProduct };
