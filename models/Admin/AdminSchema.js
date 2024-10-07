const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    }
    
)
const Admin = mongoose.model('Admin',AdminSchema );

module.exports = Admin;

// const mongoose = require("mongoose");
// const UserSchema = new mongoose.Schema (
//     {
//         name: {
//             type: String,
//             required: true
//         },
//         email: {
//             type: String,
//             required: true
//         },
//         password: {
//             type: String,
//             required: true
//         },
//         phone: {
//             type: String,
//             required: true
//         }
//     }
    
// )
// const Customer = mongoose.model('Customer',UserSchema );

// module.exports = Customer;

