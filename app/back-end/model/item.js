var mongoose = require('../configuration/mongoose');
var itemSchema = mongoose.Schema({
    name:String,
    price:Number,
    size:Number,
    category:{
        _id:String,
        name:String
    }
});
var Item = mongoose.model('items', itemSchema);
module.exports = Item;
