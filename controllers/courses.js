
//richiesta pacchetti importati
const express = require ("express");
const mongoose= require("mongoose");
const { response } = require("express");

const router= express.Router();
const CourseModel=mongoose.model("Course")
var course= new CourseModel();

router.get("/add",(req,res)=>{
    res.render("add-course");
})

router.post("/add",(req,res)=>{
    console.log(req.body);
    var course=new CourseModel();
    course.courseName=req.body.courseName;
    course.courseFees=req.body.courseFees;
    course.courseDuration=req.body.courseDuration;
    course.courseId= Math.ceil(Math.random()*10000000000);
    course.save((err,doc)=>{
    if(!err){
        res.redirect("/course/list");
        console.log("inserito");
    }
    else {
        res.send("Error occurred");
    }
    });
   
})


router.get("/list",(req, res)=>{


    /*var course=new CourseModel();
    course.courseName="nodejs";
    course.courseId="22";
    course.save();*/
 //response.send("Course Controller");
    CourseModel.find((err,docs)=>{
        if(!err){
            console.log(docs);
            res.render("list",{data: docs});
        }
        else{
            res.send("Error!");
        }
        });
    });



module.exports=router;