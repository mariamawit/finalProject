//Mariamawit Kebede

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var bodyParser = require('body-parser');
var csrf = require('csurf');
var path = require('path');
var Rooms = require('./mongooserooms');
var UserInfo = require('./mongooseuser');
var Reservation = require('./mongoosebooking');


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

// save to db and redirect
function(req, res) {  
    var obj = JSON.parse(req.body.data);
    console.log(req.body);
    var myobj = new Reservation({ 
      userid: obj.userid, 
      roomid: obj.roomid, 
      datein: obj.datein, 
      dateout: obj.dateout 
    });

    myobj.checkRoomAvailable().then(
      (data) =>{
        if(data.available){
          //res.json({available: true});
          myobj.add().then(() => {             
                  res.json({
                    status: 1,
                    userData: newRoom  
                   // myobj: newUser       
                  });     
            
                }); 
         
        }else{
          //not available
          res.json({available: false});
          
        }
      }
    ).catch((error)=> console.log(error));
      
       

   });  



router.get('/', function(req, res, next) {  
               
        res.json({ result: null, error:null })        
    });   
  
  module.exports = router;