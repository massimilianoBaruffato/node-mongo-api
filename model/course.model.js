

const mongoose =require ("mongoose");

//creazione dello schema per mongodb
var CourseSchema = new mongoose.Schema({
    courseName:{
        type: String,
        require : "Required"
    },
    courseId: {
        type: "String"
    },
    CourseDuration:{
        type: String
    },
    courseFee:{
        type:String
    }

});

mongoose.model("Course",CourseSchema);