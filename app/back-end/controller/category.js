var app = require('../configuration/app').app;
var Category = require('../model/category');
var Item = require('../model/item');
app.get('/categories', function(req, resp){
    Category.find().exec().then(
        res=>resp.json(res),
        err=>resp.sendStatus(500)
    );
});
app.post('/categories', function(req, resp){
    //    req.session.user._id;
    new Category(req.body).save().then(
        res=>resp.json(res),
        err=>resp.sendStatus(500)
    );
});
app.put('/categories/:id', function(req, resp){
    Category.updateOne(
        {_id:req.params.id},
        {$set:{ name:req.body.name }})
    .then(
        res=>{
            Item.updateMany(
                {'category._id':req.params.id},
                {$set:{'category.name':req.body.name}})
            .then(
                res=>resp.sendStatus(204),
                err=>resp.sendStatus(500)
            );
        },
        err=>resp.sendStatus(500)
    );
});
app.delete('/categories/:id', function(req, resp){
    Category.remove({_id:req.params.id}).then(
        res=>resp.sendStatus(204),
        err=>resp.sendStatus(500)
    );
});
