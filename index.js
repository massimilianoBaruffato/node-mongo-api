
const connection = require("./model");
//creazione applicazione xpresss
const express =require("express");

const application= express();
//pacchetti richiesti
const path=require("path");
const expresHandlebars=require ("express-handlebars");
const bodyparser= require("body-parser");


const CourseController= require ("./controllers/courses");
//settaggi express
application.use(bodyparser.urlencoded({
    extended: true
}));

application.set('views',path.join(__dirname,"/views/"));

//handlebars
application.engine("hbs",expresHandlebars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname+"/views/layouts"
}));

application.set("view engine","hbs");

application.get("/", (req,res)=>{
    //res.send('<h1>Hello World!<h1>')
    res.render("index",{})
});

application.use("/course",CourseController);


application.listen("3000",()=>{
    console.log("Server started")
}
);