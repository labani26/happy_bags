
const Product = require("../../models/Admin/ProductSchema");

const getAllProduct = async (req,res) => {
    try {
        const result = await Product.find({}, { __v:0 });
        
        res.send(result);

    } catch(error){
        console.log(error)
    }
}


module.exports = getAllProduct;