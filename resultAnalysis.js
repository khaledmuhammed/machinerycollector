const {mongoUri} = require('./data');
const mongoose = require('mongoose');
const {productSchema} = require('./models/product');

mongoose.connect(mongoUri,{useNewUrlParser:true})
        .then(() => console.log('mongoDB Connected'))
        .catch(err => console.log(err));

const compareAndSaveResults = async data =>{
    try{
        const products = new productSchema(data);
        console.log(products);
        return products.save().catch(err => console.log(err))
    }catch(err){
        console.error(err);
    }
}

module.compareAndSaveResults = compareAndSaveResults;