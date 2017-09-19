var User = function(mongoose){
    var userSchema = mongoose.Schema({
        login:{
            type:String,
            unique:[true, 'Такий логін вже існує'],
            required: [true, 'Потрібно заповнити обов`язково!!!'],
            validate: function(v){
                return User.findOne({login:v})
                    .then(()=>false, ()=>true);
            }
        },
        password:String
    });
    return mongoose.model('users', userSchema);
}

module.exports = User;