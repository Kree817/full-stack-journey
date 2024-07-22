const mongoose = require('mongoose')

const StudentSchema=new mongoose.Schema({
    name:String,
    course:String,
    fee:Number
})

const StudentModel= mongoose.model('students',StudentSchema)

module.exports = StudentModel
