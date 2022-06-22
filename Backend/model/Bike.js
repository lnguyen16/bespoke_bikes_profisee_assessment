const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bikeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    saleprice: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    commission: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Bike", bikeSchema);
