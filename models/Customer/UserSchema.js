const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    state: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    city: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    },
    zipCode: {
        type: String,
        required: true,
        match: /^[0-9]{5}(?:-[0-9]{4})?$/, // Pattern for US ZIP codes
        minlength: 5,
        maxlength: 10
    },
    land_mark: {
        type: String,
        required: true,
        maxlength: 200
    }
}, { _id: false });

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: AddressSchema
    }, {
    timestamps: true
}

)
const Customer = mongoose.model('Customer', UserSchema);

module.exports = Customer;
