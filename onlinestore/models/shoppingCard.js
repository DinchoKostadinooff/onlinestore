/**
 * Created by pc on 13.6.2016 г..
 */


var mongoose = require( 'mongoose' );

var ShoppingCardSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    productId:{
        type:String,
        required:true
    }
});


mongoose.model('ShoppingCard',ShoppingCardSchema);
