const mongoose = require ('mongoose');
const express = require ('express');

 //var app = express()
 var Schema = mongoose.Schema;
 var RegSchema = new Schema({
    Rollno : {
        type : Number,
        require : true
    }, 
    Eventname : {
         type : String,
         require : true
     },
     Eventtype :{
        type : String,
        require : true
     },
    Collegename : {
        type :String,
        require : true
    },
    Phoneno : {
        type : Number,
        require : true
    }
 });

 //RegSchema.save();
  
var users = mongoose.model('users', RegSchema);

module.exports = users;