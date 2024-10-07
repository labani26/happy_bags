const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema (
    {   
        // owner: {
        //     type: isObjectIdOrHexString,
        //     require: true,
        //     ref: 'Admin'
        // },

        name: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        category: {
            type: String,
            require: true
        },
        price: {
            type: String,
            require: true
        },
        material: {
            type: String,
            require: true 
        },
        image: {
            type: String,
            require: true 
        },
        number_of_pocket: {
            type: String,
            require: true 
        },
        country_of_origin: {
            type: String,
            require: true 
        },
        count: {
            type: Number,
            require: true  
        }

    },
    {
        timestamps: true
    }
)

const Product = mongoose.model('Products', ProductSchema);

module.exports = Product;