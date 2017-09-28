var express = require('express');
var router = express.Router();
var User = require('./mongooserooms');

/* GET users listing. */
router.get('/', function(req, res, next) {   
  console.log("hhh");   

      User.get().then((data) => {  
        res.json({
          status: 1,
          userData: data    
             
        }); 
      });   
      
  });


module.exports = router;
