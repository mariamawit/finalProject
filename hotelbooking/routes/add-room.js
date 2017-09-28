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
    var obj = JSON.parse(req.body.data);
    var myobj = { roomType: obj.roomType, price: obj.price, imageUrl: obj.imageUrl };
    var newRoom = new Rooms(myobj);

   
    newRoom.add().then(() => {     
      
      res.json({
        status: 1,
        userData: newRoom       
      });     

    }); 



   });  



router.get('/', function(req, res, next) {  
               
        res.render({ result: null, error:null })        
    });   
  
  module.exports = router;