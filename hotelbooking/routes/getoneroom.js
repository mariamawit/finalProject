//Mariamawit Kebede

    var express = require('express');
    var router = express.Router();
    var User = require('./mongooserooms');
    
    /* GET users listing. */
    router.get('/rooms/:id', function(req,res) {
        let id = req.params.id;
        console.log(id);
        User.get(id).then((data) => {  
            res.json({
              status: 1,
              userData: data   
              
            }); 
          });   
          
      });
    
    
    module.exports = router;
    