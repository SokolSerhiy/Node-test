var Item = function(mongoose){
    var itemSchema = mongoose.Schema({
        name:String,
        price:Number,
        size:Number,
        category:{
            _id:String,
            name:String
        }
    });
    return mongoose.model('items', itemSchema);
}
module.exports = Item;
