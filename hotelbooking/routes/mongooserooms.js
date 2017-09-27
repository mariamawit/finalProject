var express = require('express');
var mongoose = require('mongoose');
Promise = require('bluebird');
mongoose.Promise = Promise;

mongoose.connect("mongodb://root:123456@ds149844.mlab.com:49844/hotelbooking", {useMongoClient: true});

var CommentSchema = new mongoose.Schema({
  RoomType: String,
  CheckinDate: {type: String, default: new Date()},
  CheckoutDate: {type: String, default: new Date()},
//   post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
});

CommentSchema.statics.get = function(uid = null){
    
    return new Promise((res, rej) => {
        if (uid === null) {
            User.find({}, function (err, data) {
                if (err) rej(err)
                res(data)
            })
        } else {
            User.find({
                'userID': uid
            }, function (err, data) {
                if (err) rej(err)
                res(data)
            })
        }
    })
}

CommentSchema.methods.add = function () { 
    // console.log('1');   
    // console.log(this);
    return new Promise((resolve, reject) => {

        newUser = this;
        // console.log('2');
        // console.log(newUser);

        newUser.save(function (err) {
            if (err) {
                reject({
                    message: err,
                    status: 0
                })
            } else {
                console.log("user Added Successfully !");
                resolve({
                    message: "New User Added",
                    status: 1
                })
            }

        })
    })
}

// bookedrooms.findOneAndRemove({field: 'newValue'}, function(err){

//     if(err) throw err;

//     console.log('User is deleted');
// });

// bookedrooms.findOneAndUpdate({field: 'oldValue'}, {field: 'newValue'}, function(err, user){
    
//         if(err) throw err;
    
//         console.log(user);
// });


var User = mongoose.model('bookedrooms', CommentSchema);

module.exports = User;