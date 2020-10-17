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
    machineName:{
        type:String,
    }
})
module.exports = mongoose.model('product',productSchema);