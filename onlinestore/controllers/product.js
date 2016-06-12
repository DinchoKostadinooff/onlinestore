/**
 * Created by pc on 8.6.2016 г..
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');

/* private routes*/
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
module.exports.updateProduct = function(req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
        User
            .findById(req.payload._id)
            .exec(function(err, user) {



                    Product.findById(req.params.id, function(err, product) {
                        if (err){
                            res.status(401).json({
                                "message" : err
                            });
                        }


                        product.name = req.body.name;
                        product.ownerId=user._id;
                        product.price=req.body.price || product.price;
                        product.picture=req.body.picture || product.picture;
                        product.address=req.body.address || product.address;
                        product.date=Date.now();
                        product.category=req.body.category ||product.category;

                        product.save(function(err) {
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

                Product.findByIdAndRemove(req.params.id, function(err) {
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

module.exports.getProduct = function(req, res) {

    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
        User
            .findById(req.payload._id)
            .exec(function(err, user) {
                Product.find({ownerId:user.id}, function(err,product) {
                    if (err){
                        res.status(401).json({
                            "message" :err
                        });}else{
                        res.json({
                           products: product
                        });
                    }

                });
            });
    }

};

//public routes

module.exports.getAllProducts = function(req, res) {


                Product.find(function(err,product) {
                    if (err){
                        res.status(401).json({
                            "message" :err
                        });}else{
                        res.json({
                            products: product
                        });
                    }

                });


};

module.exports.getProductById = function(req, res) {

                Product.findById(req.params.id, function(err, product) {
                    if (err){
                        res.status(401).json({
                            "message" :err
                        });}else{
                        res.json({
                            product: product
                        });
                    }


                });

};

module.exports.getProductByCategory = function(req, res) {

    Product.find({category:req.params.id}, function(err, product) {
        if (err){
            res.status(401).json({
                "message" :err
            });}else{
            res.json({
                products: product
            });
        }


    });

};