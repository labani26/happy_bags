
const Product = require("../../models/Admin/ProductSchema");
const path = require('path');



const getAllProduct = async (req,res) => {
    try {
        const result = await Product.find({}, { __v:0 });
        // console.log(json(result.image));
        
        res.send(result);

    } catch(error){
        console.log(error)
    }
}


module.exports = {getAllProduct};