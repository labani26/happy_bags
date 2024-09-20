const Product = require('../../models/Admin/ProductSchema');

const Products = async (req, res) => {
    const { name, description, category, price, material, image, number_of_pocket, country_of_origin, count } = req.body;

    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { name: name }, 
            { $inc: { count: count } }, 
            { new: true } 
        );
        if(updatedProduct){
            return res.status(200).json({"message": "Product uploaded"});
        }

        // Add a new Product
        const ProductUpload = new Product ({
            name,
            description, 
            category, 
            price, 
            material, 
            image,
            number_of_pocket, 
            country_of_origin,
            count
        });
        
        // Save the product to the database
        await ProductUpload.save()
        res.status(200).json({"message": "Product uploaded"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { Products };
