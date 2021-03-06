//Mariamawit Kebede

var express = require('express');
var mongoose = require('mongoose');
Promise = require('bluebird');
mongoose.Promise = Promise;

mongoose.connect("mongodb://root:123456@ds149844.mlab.com:49844/hotelbooking", {useMongoClient: true});

var BookingSchema = new mongoose.Schema({
   
    userid: String,
    roomid: String,
    datein: Date,
    dateout: Date


});

BookingSchema.statics.get = function(uid = null){
    
    return new Promise((res, rej) => {
        if (uid === null) {
            Rooms.find({}, function (err, data) {
                if (err) rej(err)
                res(data)
            })
        } else {
            Rooms.find({
                '_id': uid
            }, function (err, data) {
                if (err) rej(err)
                res(data)
            })
        }
    })
}

BookingSchema.methods.add = function () { 
   
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
                    message: " Added",
                    status: 1
                })
            }

        })
    })
}

BookingSchema.methods.checkRoomAvailable = function () {
    return new Promise((resolve, reject) => {
        console.log("checking room availability");
        Reservation.find({
            "dateout": {"$lt": this.dateout}, 
            "datein": {"$gt": this.datein},
            "roomid": this.roomidnot
        }, (error,data)=>{
            if(error) throw error;
            //get the result if there is existing records in the database,meaning room already taken
            console.log(data);
            if(data.length > 0){
                reject({available: false});
            }else{
                resolve({available: true});
            }
        });
    });
}

var Reservation = mongoose.model('reservation', BookingSchema);

module.exports = Reservation;