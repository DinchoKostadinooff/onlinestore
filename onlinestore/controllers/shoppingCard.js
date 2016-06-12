/**
 * Created by pc on 12.6.2016 г..
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





            });
    }

};
