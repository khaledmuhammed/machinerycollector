const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
const productSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    domain:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    category:{
        type:String,
    },
    brand:{
        type:String,
    },
    machineName:{
        type:String,
    },
    expire_at: {type: Date, default: Date.now, expires: 2*24*60*60}
})
module.exports = mongoose.model('product',productSchema);