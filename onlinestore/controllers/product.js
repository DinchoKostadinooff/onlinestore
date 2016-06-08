/**
 * Created by pc on 8.6.2016 г..
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');

module.exports.createProduct = function(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
        User
            .findById(req.payload._id)
            .exec(function(err, user) {

                    var product= new Product();

                    product.name = req.body.name;
                    product.ownerId=user._id;
                    product.price=req.body.price;
                    product.picture=req.body.picture;
                    product.address=req.body.address;
                    product.date=Date.now();
                    product.category=req.body.category;

                    product.save(function(err) {
                        res.status(200);
                        res.json({
                            "success" :true
                        });
                    });


            });
    }

};
