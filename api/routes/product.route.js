const express = require('express');
const app = express();
const productRoutes = express.Router();
//Require Product model on our routes module
let Product = require('../models/Product');
//Defined store route
productRoutes.post('/add',(req,res)=>{
    console.log('add', req.bpody);
    let product = new Product(req.body);
    console.log('add - 1', product);
    product.save().then(product =>{
        res.status(200).json({'Product': 'Product has been added successfully'});
    }).catch(err =>{
        res.status(400).send("unable to save to database");
    });
});

//Defined get data(index or listing) route

productRoutes.route('/').get((req, res)=>{
    console.log('--/--', req, res);
    Product.find((err, products)=>{
        if(err){
            console.log('--/-->ERROR',err);
            console.log(err);
        } else{
            console.log('--/-->RESPONSE',products);
            res.json(products);
        }
    });
});

// Defined edit route
productRoutes.route('/edit/:id').get((req, res)=>{
    console.log('/edit/:id', req, res);
    let id = req.params.id;
    console.log('id', id);
    Product.findById(id, function(err, product){
        console.log('findById', id, err, product);
        res.json(product);
    });
});
//  Defined update route  
productRoutes.route('/update/:id').post(function (req, res) {  
    Product.findById(req.params.id, function(err, product) {  
      if (!product)  
        res.status(404).send("Record not found");  
      else {  
        product.ProductName = req.body.ProductName;  
        product.ProductDescription = req.body.ProductDescription;  
        product.ProductPrice = req.body.ProductPrice;  
   product.save().then(product => {  
            res.json('Update complete');  
        })  
        .catch(err => {  
              res.status(400).send("unable to update the database");  
        });  
      }  
    });  
  });  
  // Defined delete | remove | destroy route  
  productRoutes.route('/delete/:id').get(function (req, res) {  
      Product.findByIdAndRemove({_id: req.params.id}, function(err, product){    
          if(err) res.json(err);  
          else res.json('Successfully removed');  
      });  
  });  
  module.exports = productRoutes;  