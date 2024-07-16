const mongoose=require('mongoose')

const StudentsSchema= new mongoose.Schema({
    name:String,
    course:String,
    fee:Number
})

const StudentModel=mongoose.model('students',StudentsSchema)

module.exports=StudentModel;