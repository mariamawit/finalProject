var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var bodyParser = require('body-parser');
var csrf = require('csurf');
var path = require('path');
var User = require('./mongooserooms');


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
// validate form
function(req, res, next) {
  req.checkBody('roomtype', 'required field').notEmpty();
  req.checkBody('chechindate', 'required field').notEmpty();
  req.checkBody('checkoutdate', 'required field').notEmpty(); 
  
  const err = req.validationErrors(true );    
  if(err){
    //req.session.csrfToken = req.csrfToken();
    res.render('booking', {result: "null", error:"All input fields are Required!" });
  }
  else{  

    return next();
  }

},
// save to db and redirect
function(req, res) {  

    var myobj = { RoomType: req.body.roomtype, CheckinDate: req.body.chechindate, CheckoutDate: req.body.checkoutdate };
    var newUser = new User(myobj);
   
    newUser.add().then(() => {
      console.log("------+++++------")
      console.log(newUser._id);
      console.log("------+++++------")
      var token = jwt.sign({ id: newUser._id }, "my secret", {
        
        expiresIn: 86400 // expires in 24 hours
        
      });
      console.log("------------")
      console.log(token);
      console.log("------------")
  
      res.status(200).send({ auth: true, token: token });

      res.json({
        status: 1,
        userData: newUser       
      });     

    })  
   });  



router.get('/', function(req, res, next) {               
        res.render('booking', { result: null, error:null })        
    });   
  
  module.exports = router;