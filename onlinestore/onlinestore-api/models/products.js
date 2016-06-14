/**
 * Created by pc on 8.6.2016 г..
 */
var mongoose = require( 'mongoose' );

var productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    },
    address:{
        type:String,
        required:true
    },
    img: {
        data: Buffer, contentType: String
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    category:{
        type:String,
        required:true
    }
});


mongoose.model('Product', productSchema);
