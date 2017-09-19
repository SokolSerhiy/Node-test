var bcrypt = require('bcryptjs');

module.exports = function(app, User, preAuth){
    app.post('/current/user', preAuth, function(req, resp){
        resp.json(req.session.user);
    });
    app.post('/registration', function(req, resp){
        var user = new User(req.body);
        var error = user.validate(function(err){
            if(err.errors&&err.errors.login){
                resp.sendStatus(400);
            }else{
                bcrypt.genSalt(10, function(err, salt){
                    if(err) err=>resp.sendStatus(500);
                    bcrypt.hash(user.password, salt, function(err, hash) {
                        if(err) err=>resp.sendStatus(500);
                        user.password = hash;
                        user.save().then(
                            res=>resp.sendStatus(204),
                            err=>resp.sendStatus(500)
                        );
                    });
                });
            }
        });
    });

    app.post('/login', function(req, resp){
        User.findOne({login:req.body.login}).exec().then(
            user=>{
                bcrypt.compare(req.body.password, user.password).then(
                    res=>{
                        if(res){
                            req.session.user = user;
                            resp.sendStatus(204);
                        }else{
                            resp.sendStatus(401);
                        }
                    },
                    err=>resp.sendStatus(401)
                );
            },
            err=>resp.sendStatus(401)
        );
    });
}