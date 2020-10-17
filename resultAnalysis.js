const {mongoUri} = require('./data');
const mongoose = require('mongoose');
const product = require('./models/product');

mongoose.connect(mongoUri,{useNewUrlParser:true,useUnifiedTopology: true})
        .then(() => console.log('mongoDB Connected'))
        .catch(err => console.log(err));

const compareAndSaveResults =async data=>{
    try{
        data.forEach(async element => {
            await product.updateOne({link:element.link},element,{upsert: true});
        });
        return 
    }catch(err){
        console.log(err);
    }
}

module.exports = compareAndSaveResults;