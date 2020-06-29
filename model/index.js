const mongoose = require("mongoose");


//connessione al db mongo
mongoose.connect("mongodb://localhost:27017/Courses",{useNewUrlParser: true}, (error)=>{
    if(!error){
        console.log("Success Connection");
    }
    else{
        console.log("Error")
    }
    
});

const Course = require("./course.model");
