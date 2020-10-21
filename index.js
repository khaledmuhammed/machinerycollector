var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const getData = require('./ScrapeData');
const product = require('./models/product');

// avoid bloking 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology: true})
        .then(() => console.log('mongoDB Connected'))
        .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 4444;

var Router = express.Router();


Router.get('/',(req,res)=>{
    res.json({message:'API IS WORKING'});
});

Router.get('/products',(req,res)=>{
    product.find({},function(err,products){
        res.json(products);
    });
})

app.use('/api',Router);

app.listen(port);
console.log('Connected to server on port: '+port);

// getData();

