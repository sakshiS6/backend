const mongoose = require('mongoose');

const url ="";

//Asynchronous function - returns Promise
mongoose.connect( url )
    .then((result) => {
        console.log('DB Connected');
        
    }).catch((err) => {
        console.log(err);     
    });