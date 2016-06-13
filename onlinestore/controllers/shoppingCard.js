/**
 * Created by pc on 12.6.2016 г..
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
var ShoppingCard = mongoose.model('ShoppingCard');

module.exports.createProduct= function(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
        User
            .findById(req.payload._id)
            .exec(function(err, user) {
                var shoppingCard=new ShoppingCard();
                shoppingCard.userId=user.id;
                shoppingCard.productId=req.params.id;


                shoppingCard.save(function(err) {
                    if (err){
                        res.status(401).json({
                            "message" : err
                        });
                    }else{
                        res.status(200);
                        res.json({
                            "success" :true
                        });
                    }

                });





            });
    }

};
module.exports.deleteProduct = function(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
        User
            .findById(req.payload._id)
            .exec(function(err, user) {

                ShoppingCard.findByIdAndRemove(req.params.id, function(err) {
                    if (err){
                        res.status(401).json({
                            "message" :err
                        });}else{
                        res.json({
                            "success" :true
                        });
                    }

                });




            });



    }

};
