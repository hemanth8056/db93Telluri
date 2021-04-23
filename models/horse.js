const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
    horsename: {
        type: String,
        required: [true, "horsename is Required"]
    },
    habitat: {
        type: String,
        required: [true, "horse Habitat is Required"]
    },
    price: {
        type: Number,
        required: [true, "Price of the fish is required"],
        min: [100, "pricde of the horse should be minimus 100$"],
        max: [1000, "pricde of the horse should be minimus 1000$"]
    }
})
module.exports = mongoose.model("horse", horseSchema)