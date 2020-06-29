
//richiesta pacchetti importati
const express = require ("express");
const mongoose= require("mongoose");
const { response } = require("express");

const router= express.Router();
const CourseModel=mongoose.model("Course")
var course= new CourseModel();
course.courseName="NodeJS";
course.courseId="1";
courseDuration="0";
course.save();
router.get("/list",(req, res)=>{
    response.send("Course Controller)");
    CourseModel.find({},(err,docs)=>{
        if(!err){
            
            res.render("list",{data: docs});
        }
        else{
            res.send("Error!");
        }
        });
    });



module.exports=router;