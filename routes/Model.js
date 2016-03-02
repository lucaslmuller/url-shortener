const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const _schema = new Schema({
    original_url: String,
    short_url: String
});

const Model = mongoose.model("url", _schema);
    
module.exports = Model;
   
