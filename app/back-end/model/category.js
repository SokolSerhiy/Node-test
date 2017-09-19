var mongoose = require('../configuration/mongoose');
var categorySchema = mongoose.Schema({
    name:String
});
var Category = mongoose.model('categories', categorySchema);
module.exports = Category;