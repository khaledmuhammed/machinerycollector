const {mongoUri} = require('./data');
const mongoose = require('mongoose');
const product = require('./models/product');

mongoose.connect(mongoUri,{useNewUrlParser:true,useUnifiedTopology: true})
        .then(() => console.log('mongoDB Connected'))
        .catch(err => console.log(err));

const compareAndSaveResults = data=>{
    try{
        data.forEach(element => {
            const products = new product(element);
            products.save().catch(err => console.log(err));
        });
        return 
    }catch(err){
        console.log(err);
    }
}

module.exports = compareAndSaveResults;