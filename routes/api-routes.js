var db = require('../models');
var path = require('path');

module.exports = function(app){
    app.get('/api/gifts', function(req,res){

        db.Gift.findAll({}).then(function(dbGift) {
            res.json(dbGift);
        });
    });

    app.post('/api/gift', function(req,res){
        console.log(req.body);
        db.Gift.create({
            descr: req.body.descr,
            person: req.body.person,
            url: req.body.url
        }).then(function(dbGift){
            res.json(dbGift);
        })
    });

    app.put("/api/gift", function(req,res){
        db.Gift.update({
            purchased: req.body.purchased
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(dbGift){
            res.json(dbGift);
        });
    });
};