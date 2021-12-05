const mongoose = require("mongoose");

const brandSchema=mongoose.Schema({
    id:String,
    name:String
});

const brandModel = mongoose.model("brand",brandSchema,"brand");

module.exports = brandModel;