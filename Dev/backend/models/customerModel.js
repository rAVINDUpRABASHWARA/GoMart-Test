const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    
    FirstName: {
        type: String,
        required: true,
    },

    LastName: {
        type: String,
        required: true
    },

    NICNumber: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    Address: {
        type: String,
        required: true
    },
    
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
