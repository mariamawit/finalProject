//Mariamawit Kebede

var express = require('express');
var mongoose = require('mongoose');
Promise = require('bluebird');
mongoose.Promise = Promise;

mongoose.connect("mongodb://root:123456@ds149844.mlab.com:49844/hotelbooking", {useMongoClient: true});

var RoomsSchema = new mongoose.Schema({
   
  roomType: String,
  price:  Number,
  imageUrl:  String

});

RoomsSchema.statics.get = function(id = null){
    
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

RoomsSchema.methods.add = function () { 
   
    return new Promise((resolve, reject) => {

        newUser = this;
        
        newUser.save(function (err) {
            if (err) {
                reject({
                    message: err,
                    status: 0
                })
            } else {
                
                resolve({
                    message: "Added",
                    status: 1
                })
            }
        })
    })
}



var Rooms = mongoose.model('rooms', RoomsSchema);

module.exports = Rooms;