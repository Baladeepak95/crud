const express = require ('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/haplot',(err) => {
    if(err) {
        console.log("mongoose successful connected");
    }
})