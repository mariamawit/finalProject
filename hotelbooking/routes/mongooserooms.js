var express = require('express');
var mongoose = require('mongoose');
Promise = require('bluebird');
mongoose.Promise = Promise;

mongoose.connect("mongodb://root:123456@ds149844.mlab.com:49844/hotelbooking", {useMongoClient: true});

var CommentSchema = new mongoose.Schema({
   
  roomType: String,
  price:  Number,
  imageUrl:  String

});

CommentSchema.statics.get = function(id){
    
    return new Promise((res, rej) => {
        if (id === null) {
            Rooms.find({}, function (err, data) {
                if (err) rej(err)
                res(data)
            })
        } else {
            Rooms.findOne({
                '_id': id
            }, function (err, data) {
                if (err) rej(err)
                res(data)
            })
        }
    })
}

CommentSchema.methods.add = function () { 
   
    return new Promise((resolve, reject) => {

        newUser = this;
        
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

// CommentSchema.statics.findBytype = function (type, cb) {
//     this.find({ 
//         roomtype: type,
// allocate: false
//     }, cb);
// }

var Rooms = mongoose.model('rooms', CommentSchema);

module.exports = Rooms;