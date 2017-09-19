var Category = function(mongoose){
    var categorySchema = mongoose.Schema({
        name:String
    });
    return mongoose.model('categories', categorySchema);
}
module.exports = Category;