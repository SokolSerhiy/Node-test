var bcrypt = require('bcryptjs');
var mongoose = require('../configuration/mongoose');
var userSchema = mongoose.Schema({
    login:{
        type:String,
        unique:[true, 'Такий логін вже існує'],
        required: [true, 'Потрібно заповнити обов`язково!!!'],
        validate: {
            isAsync: true,
            validator: function(value, cb) {
                User.findOne({login:value})
                .then(
                    res=>{
                        if(res) {
                            cb(false, 'Already exist')
                        }else{
                            cb(true);
                        }
                    },
                    err=>console.log(err)
                );
            }
        }
    },
    password:String
});
userSchema.pre('save', function(next, done){
    var self = this;
    bcrypt.hash(self.password, 10).then(
        res=>{self.password=res; next();},
        err=>console.log(err)
    );
});
userSchema.methods.checkPassword = function(password){
    var self = this;
    return bcrypt.compare(password, self.password);
}
var User = mongoose.model('users', userSchema);
module.exports = User;