//Mariamawit Kebede

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var bodyParser = require('body-parser');
var csrf = require('csurf');
var path = require('path');
var User = require('./mongooserooms');
var UserInfo = require('./mongooseuser');


var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');



var router = express.Router();


var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', urlencodedParser, 
// validate form
function(req, res, next) {
  
  
  const err = req.validationErrors(true );    
  if(err){
  
    res.render('login', {result: "null", error:"All input fields are Required!" });
  }
  else{  
    return next();
  }

},
// send the token
function(req, res) {  
  //var obj = JSON.parse(req.body.data);  
      
  var myobj = { username: "obj.roomType", email: "imageUrl: obj.imageUrl" };
  var UserInfo = new newUserInfo(myobj); 

    newUserInfo.add().then(() => {     
      var token = jwt.sign({ id: newUser._id }, "my secret", {        
        expiresIn: 86400 // expires in 24 hours        
      });
        
      //res.status(200).send({ auth: true, token: token });
      res.json({ auth: true, token: token, status:200 });
      res.send('booking', { token: token });

     
    }); 

   });  



router.get('/', function(req, res, next) {  
               
        res.render('booking', { result: null, error:null })        
    });   
  
  module.exports = router;