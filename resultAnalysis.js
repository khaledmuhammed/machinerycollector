const {mongoUri} = require('./data');
const mongoose = require('mongoose');
const {productSchema} = require('./models/product');

mongoose.connect(mongoUri,{useNewUrlParser:true,useUnifiedTopology: true})
        .then(() => console.log('mongoDB Connected'))
        .catch(err => console.log(err));

const compareAndSaveResults = data =>{
    try{
        console.log('hello');
        data.forEach(element => {
            const products = new productSchema(element);
            products.save().catch(err => console.log(err));
        });
        return 
    }catch(err){
        console.log(err);
    }
}

module.compareAndSaveResults = compareAndSaveResults;