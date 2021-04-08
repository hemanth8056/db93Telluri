const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
    horsename: String,
    habitat: String,
    price: Number
})
module.exports = mongoose.model("horse", horseSchema)