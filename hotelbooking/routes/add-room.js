var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var bodyParser = require('body-parser');
var csrf = require('csurf');
var path = require('path');
var Rooms = require('./mongooserooms');
var UserInfo = require('./mongooseuser');


var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');


//var auth = require('./auth/AuthController');

var router = express.Router();

//var csrfProtection = csrf({ cookie: true });
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', urlencodedParser, 
//validate form
// function(req, res, next) {
//   req.checkBody('type', 'required field').notEmpty();
//   req.checkBody('price', 'required field').notEmpty();
//   req.checkBody('imageUrl', 'required field').notEmpty(); 
  
//   const err = req.validationErrors(true );    
//   if(err){
//     //req.session.csrfToken = req.csrfToken();
//     res.render('booking', {result: "null", error:"All input fields are Required!" });
//   }
//   else{  

//     return next();
//   }

// },
// save to db and redirect
function(req, res) {  

    var myobj = { type: req.body.type, price: req.body.price, imageUrl: "picture" };
    var newUser = new Rooms(myobj);
      
   
    newUser.add().then(() => {     
      var token = jwt.sign({ id: newUser._id }, "my secret", {        
        expiresIn: 86400 // expires in 24 hours        
      });
        
      res.status(200).send({ auth: true, token: token });

      res.json({
        status: 1,
        userData: newUser       
      });     

    }); 



   });  



router.get('/', function(req, res, next) {  
               
        res.render('booking', { result: null, error:null })        
    });   
  
  module.exports = router;