var app = require('../configuration/app').app;
var Item = require('../model/item');

    app.get('/items/:id', function(req, resp){
        Item.findOne({_id:req.params.id}).exec().then(
            res=>resp.json(res),
            err=>resp.sendStatus(500)
        );
    });
    app.get('/items', function(req, resp){
        Item.find().exec().then(
            res=>resp.json(res),
            err=>resp.sendStatus(500)
        );
    });
    app.post('/items', function(req, resp){
    //    req.body.category.id = req.body.category._id;
        new Item(req.body).save().then(
            res=>resp.json(res),
            err=>resp.sendStatus(500)
        );
    });
    app.put('/items/:id', function(req, resp){
        Item.updateOne(
            {_id:req.params.id},
            {$set:{
                name:req.body.name,
                category:req.body.category
            }})
        .then(
            res=>resp.sendStatus(204),
            err=>resp.sendStatus(500)
        );
    });
    app.delete('/items/:id', function(req, resp){
        Item.remove({_id:req.params.id}).then(
            res=>resp.sendStatus(204),
            err=>resp.sendStatus(500)
        );
    });
